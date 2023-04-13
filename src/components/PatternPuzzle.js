import React from 'react'
import PatternLock from "react-pattern-lock";
import Button from "@mui/material/Button";
import axios from 'axios';
import { registerUser, verify } from '../utils.js/passwords';

const PatternPuzzle = (props) => {
    const [path, setPath] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);


    const reset = () => {
        // Renable the pattern
        setDisabled(false);
        // Clear the pattern.
        setPath([]);
    };

    const register = () => {
        console.log(path);
        console.log(props.userId);
        const registerData = {
            userId: props.userId,
            password: path.join(',')
        };

        console.log('registerData ' + registerData)

        registerUser(registerData, 1, props.onSuccess, props.onFailure);

    }

    const login = () => {

        console.log(path);
        const loginData = {
            userId: props.userId,
            password: path.join(',')
        };
        console.log('loginData ' + loginData)

        verify(loginData, props.onSuccess, props.onFailure);


    }

    console.log(props.newUser);

    return (
        <div className='full-screen bg-home3'>
            <div className="container1">
                <div className="content">
                    <center>
                        <PatternLock
                            path={path}
                            width={300}
                            size={4}
                            disabled={disabled}
                            allowJumping={true}
                            invisible={true}

                            onChange={(path) => setPath(path)}

                            onFinish={() => {
                                setDisabled(true);
                                console.log(path.join(' '));
                            }}
                            style={{
                                margin: "0 auto",
                                backgroundColor: 'black',
                                borderRadius: 30,

                            }}
                        />
                        <p>Pattern output: {path.join(", ")}</p>
                        {/* A button that is used to reset the pattern */}
                        <Button variant="outlined" color="error" onClick={reset} style={{ marginRight: "30px" }}>Reset</Button>
                        {props.newUser ?
                            <Button variant="outlined" color="success" onClick={register} style={{ marginLeft: "10px" }}>Register</Button>
                            :
                            <Button variant="outlined" color="success" onClick={login} style={{ marginLeft: "10px" }}>Login</Button>
                        }
                        {/* <SubmitButton password={path.join('')} newUser={newUser} email={email} domainName={domainName} toUpdate={toUpdate} puzzleId={puzzleId} /> */}
                        <br /><br />
                        {/* <Link to="/otp">Forget Password ?</Link> */}
                        {/* document.location.replace(newUser=1&domainName=www.microsoft.com&email=daadreyaa@gmail.com&puzzleId=1) */}
                    </center>
                </div>
            </div>
        </div >
    )
}

export default PatternPuzzle