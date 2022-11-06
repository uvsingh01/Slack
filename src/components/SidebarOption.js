import React,{useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addChannel = (e) => {
    e.preventDefault();
    const channelName = input;
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
    setInput("")
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={selectChannel}
      onSubmit={addChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon && addChannelOption ? (
        <form >
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Add Channel`} />
        </form>
      ) : Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }

  >form>input{
    width: 90%;
    outline: none;
    border: 2px solid var(--slack-color);
    border-radius: 5px;
    text-align: center;
    color: white;
    background-color: var(--slack-color);
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
  

`;
