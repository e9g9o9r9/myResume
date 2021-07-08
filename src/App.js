import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login";


function App(props) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userid?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/users'
                           render = {() => <UsersContainer />}/>
                    <Route path='/login'
                           render={() => <LoginPage />} />

                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
