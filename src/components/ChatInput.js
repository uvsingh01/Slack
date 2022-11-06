import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import {serverTimestamp} from 'firebase/firestore';
function ChatInput({channelName,  channelId, chatRef}) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);
    const sendMessage = e=>{
        e.preventDefault();
        if(!channelId){
            return false;
        }

        if(input){
            db.collection("rooms").doc(channelId).collection("messages").add({
                message:input,
                timestamp: serverTimestamp(),
                user:user.displayName,
                userImage:user.photoURL,
            })
        }
        chatRef?.current?.scrollIntoView({
            behavior:"smooth"
          });
        setInput("");
    }
  return (
    <ChatInputContainer>
        <form onSubmit={sendMessage} >
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message # ${channelName}`} />
            <Button type="submit">
                Send
            </Button>
        </form>
        
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius:20px;
>form{
    position:relative;
    display:flex;
    justify-content: center;
}

>form>input{
    position: fixed;
    bottom:30px;
    width:50%;
    border:1px solid gray;
    border-radius: 3px;
    padding: 1.5vw;
    outline: none;
}

>form >Button{
    display:none;
}
// @media(max-width: 750px){
//     >form>input
//   }
`;

