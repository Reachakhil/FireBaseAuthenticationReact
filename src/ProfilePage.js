import React from "react";
import './profile.css'
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { useHistory } from "react-router-dom";


const ProfilePage = () => {
  const [{ user }, dispatch] = useStateValue()
  
  const signOut = () => {
    auth.signOut().then(function() {
      console.log('Signed Out');
      dispatch({
        type: actionTypes.LOG_OUT,
    })
    localStorage.clear();
    }, function(error) {
      console.error('Sign Out Error', error);
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