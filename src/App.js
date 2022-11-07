import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header';
import styled from "styled-components"
import Sidebar from "./components/Sidebar"
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login  from './components/Login';
import {auth} from "./firebase"
// import { ViewSidebar } from '@mui/icons-material';
// import { Switch } from "react-router"

export default function App() {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <img src='https://i.pinimg.com/originals/a4/76/1b/a4761ba06e7f07bf5c4d076b61b62f56.gif' alt='https://i.pinimg.com/originals/a4/40/9f/a4409f19e2b4136bf5c2205029b92ffb.gif ' height={"300px"} width={"300px"}/>
      </AppLoading>
    )
  }

  return (
    <>
    <Router>
    {!user? <Login /> :(
      <>
      <Header/>
      <AppBody>
        <Sidebar/>
        <Chat/>
        <Routes>
          <Route path="/" exact>
            
          </Route>
          
        </Routes>
      </AppBody>
        
      </>
    )}
      
    </Router>
    </>
  );
}

const AppBody = styled.div`
display:flex;
height:100vh;
`;

const AppLoading = styled.div`
display:flex;
height: 100vh;
justify-content: center;
align-items: center;
background-color: rgb(244,249,250);
`;
