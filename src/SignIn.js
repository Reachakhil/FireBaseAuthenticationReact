import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Login(props) {
    const classes = useStyles();
    const [{ user }, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                localStorage.setItem('user', JSON.stringify(result.user));

            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__text">
                    <h3>Sign In</h3>
                    <div className="login__form">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div><TextField required id="standard-required" label="Email" /></div>
                            <div><TextField required id="standard-password-input" label="Password" type="password" autoComplete="current-password" /></div>
                        </form>

                        <div className="black"> <Button>Sign In</Button></div>
                        <div>Or</div>
                        <div className="google">
                        <Button type="submit" onClick={signIn} >
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>Google
                        </Button>
                        </div>
                        <div>Don't have an account? <a className="signUp">Sign Up Here</a> </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Login;