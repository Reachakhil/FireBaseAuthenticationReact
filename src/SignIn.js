import React, {useState} from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    const onChangeHandler = (event) => {
        console.log(event)
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
        console.log(name, password )
    };
    const SignInWithEmailPassword = () =>{
        auth.signInWithEmailAndPassword(email, password).then(res=>{
            console.log(res)
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            })

        }).catch(e=>{
            console.log(e);
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__text">
                    <h3>Sign In</h3>
                    <div className="login__form">
                        <form className={classes.root} noValidate autoComplete="off">
                            <div><TextField required id="standard-required"
                            value = {email}
                            name="userEmail"
                            onChange = {(event) => setEmail(event.target.value)}
                            label="Email"
                             /></div>

                            <div><TextField required id="standard-password-input" label="Password"
                             name="userPassword" type="password" autoComplete="current-password"
                             value={password}  onChange = {(event) => setPassword(event.target.value)} /></div>
                        </form>

                        <div className="black"> <Button onClick={SignInWithEmailPassword}>Sign In</Button></div>
                        <div>Or</div>
                        <div className="google">
                        <Button type="submit" onClick={signIn} >
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>Google
                        </Button>
                        </div>
                        <div>Don't have an account? <Link to={'/signup'} className="signUp">Sign Up Here</Link> </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Login;