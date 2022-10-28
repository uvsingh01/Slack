import React from 'react'
import styled from "styled-components"
import {Avatar } from "@mui/material"
import  {AccessTime , Search, HelpOutline}from "@mui/icons-material"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
    {/* Header left */}
    <HeaderLeft>
      <HeaderAvatar
      onClick={()=>auth.signOut()}
      src={user?.photoURL}
      alt={user?.displayName}
      ></HeaderAvatar>
      <AccessTime />
    </HeaderLeft>
    {/* Header Search */}
    <HeaderSearch>
      <Search></Search>
      <input placeholder='search channel'></input>
    </HeaderSearch>
    {/* Header Right */}
    <HeaderRight>
      <HelpOutline></HelpOutline>
    </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
background-color:var(--slack-color);
display:flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
color: white;
`;

const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items: center;
margin-left: 20px;

 >.MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor:pointer;
:hover{
  opacity: 0.8;
}
`;

const HeaderSearch = styled.div`
flex:0.4;
border-radius: 6px;
opacity: 1;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px;
align-items: center;
color:grey;
border: 1px gray solid;
> input{
  background-color: transparent;
  border:none;
  text-align: center;
  min-width:30vw;
  outline:0;
  color:white;
  
}
`

const HeaderRight = styled.div`
flex:0.3;
display: flex;
justify-content: flex-end;
>.MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 30px;
  
}
`;