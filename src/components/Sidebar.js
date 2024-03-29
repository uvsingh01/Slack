import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";
import SidebarOption from './SidebarOption';
import { auth, db } from '../firebase';
import {useCollection} from "react-firebase-hooks/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Apex</h2>
                <h3>
                    <FiberManualRecord></FiberManualRecord>
                    {user.displayName}
                </h3>
            </SidebarInfo>
            <Create/>
        </SidebarHeader>
        <SidebarOption Icon={InsertComment}  title="Threads"/>
        <SidebarOption Icon={Inbox}  title="Mentions & reactions"/>
        <SidebarOption Icon={Drafts}  title="Saved items"/>
        <SidebarOption Icon={BookmarkBorder}  title="Channel browser"/>
        <SidebarOption Icon={PeopleAlt}  title="People & user groups"/>
        <SidebarOption Icon={Apps}  title="Apps"/>
        <SidebarOption Icon={FileCopy}  title="File Browser"/>
        <SidebarOption Icon={ExpandLess}  title="Show less"/>
        <hr/>
        <SidebarOption Icon={ExpandMore} title="Channels"/>
        <hr/>
        <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>

        {channels?.docs.map(doc=>
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
        )}
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
background-color: var(--slack-color);
flex:0.5;
border-top: 1px solid #49274b;
color: white;
margin-top: 60px;
max-width: 260px;
overflow-y: scroll !important;

::-webkit-scrollbar-track
{
	border-radius: 10px;
  background-color: var(--slack-color);
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: var(--slack-color);
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #340e36;
}

>hr{
  margin-top: 10px;
  margin-bottom:10px;
  border: 1px solid #49274b;
}


`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding :13px;
>.MuiSvgIcon-root{
  padding:8px;
  color:#49274b;
  font-size: 18px;
  background-color: white;
  border-radius: 30px;
}
@media(max-width:350px){
   >.MuiSvgIcon-root{
    padding:3px;
   }

  }
`;

const SidebarInfo = styled.div`
flex:1;
>h2{
  font-size:15px;
  font-weight: 900;
  margin-bottom:5px;
}
>h3{
  display:flex;
  font-size :13px;
  font-weight :400;
}

>h3>.MuiSvgIcon-root{
  color:green;
  margin-top: 1px;
  margin-right: 2px;
  font-size: 14px;
}
`;