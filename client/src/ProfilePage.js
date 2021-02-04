import React, {useEffect} from "react";
import './profile.css'
import { Button } from '@material-ui/core';

import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import axios from 'axios';


const ProfilePage = () => {
  const [{ user }, dispatch] = useStateValue()

  useEffect(()=>{
    console.log("start of pagee")
    axios.get(`/example`)
    .then(res => {
    console.log("result", res)
    })
  },[])
  
  const signOut = () => {
    auth.signOut().then(function() {
      dispatch({
        type: actionTypes.LOG_OUT,
    })
    localStorage.clear();
    }, function(error) {
    });
}
  

  return (
    <div className="profile">
      <div className="profile__container">
        <h2>Hey, {user.displayName ? user.displayName : 'user'} Welcome!</h2>

        <Button  onClick={signOut}>Log Out</Button>
        </div>
    </div>
  ) 
};
export default ProfilePage;