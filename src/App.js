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
        <AppLoadingContent>
        <img src='https://wearemarvellous.com/app/uploads/2016/01/NnOjGZC.gif' alt='https://i.pinimg.com/originals/a4/40/9f/a4409f19e2b4136bf5c2205029b92ffb.gif '/>
        </AppLoadingContent>
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
align-items: center;
justify-content: center;
margin-top: 200px;
`;

const AppLoadingContent = styled.div`
`;