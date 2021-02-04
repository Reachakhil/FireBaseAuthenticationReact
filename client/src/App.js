import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function App() {
  const [{user}, dispatch] = useStateValue();  
  useEffect(()=>{
    console.log("start of pagee")
   
  },[])
useEffect(()=>{
  console.log('user',user)
  if(!user) {
    localStorage.getItem('user') &&  dispatch({
      type:actionTypes.SET_USER,
      user: JSON.parse(localStorage.getItem('user')),
  });
}
},[user])
  return (
    <div className="App">
      {!user ?
        (<BrowserRouter>
          <div>
            <Switch>
            <SignIn exact path="/" />
            <SignUp path="/signUp" />
            </Switch>
           
          </div>
        </BrowserRouter>)
        :
        (<ProfilePage />)
      }

    </div>
  );
}

export default App;
