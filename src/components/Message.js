import styled from '@emotion/styled';
import React from 'react'

function Message({message, timestamp, user, userImage}) {
  return (
    <MessageContainer>
    <img src={userImage} alt="not found" />
    <MessageInfo>
        <h4>
        {user}{"  "}
        <span>
            {new Date(timestamp?.toDate()).toLocaleString("en-IN",{timeZone: 'Asia/Kolkata'})}
        </span>
        </h4>
        <p>{message}</p>
    </MessageInfo>
    </MessageContainer>
  )
}

export default Message;

const MessageContainer = styled.div`
display:flex;
align-items: center;
padding:20px;
>img{
    height: 50px;
    border-radius: 8px;
}

@media(max-width:550px){
h4{
  font-size: 4vw;
}
>img{
  height:7vw;
}
p{
  font-size: 4vw;
}
}

`;

const MessageInfo = styled.div`
padding-left: 10px;
>h4>span{
    color: darkgray;
    font-weight: 500;
    margin-left: 4px;
    font-size:10px;
}

`;