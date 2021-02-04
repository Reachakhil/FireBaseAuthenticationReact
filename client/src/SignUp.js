import React,{useState} from 'react';
import './SignUp.css'
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { auth, provider } from './firebase';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function SignUp(props) {
    const classes = useStyles();
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{ user }, dispatch] = useStateValue()
    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        console.log(email, password,displayName)
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(res =>{
            console.log('logged in',res)
        }).catch(e=>{
            console.log('error',e)
        })
        setEmail("");
        setPassword("");
        setDisplayName("");
        
      };
    return (
        <div className="signup">
            <div className="signup__container">
            <h3>Sign In</h3>
            <div className="signup__form">
                        <form className={classes.root} noValidate autoComplete="off">
                        <div><TextField required id="standard-required"
                            value = {displayName}
                            onChange = {(event) => setDisplayName(event.target.value)}
                            label="Name"
                             /></div>
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

                        <div className="black"> <Button onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}>Sign Up</Button></div>
                    </div>
            </div>
        </div>
    );
}

export default SignUp;