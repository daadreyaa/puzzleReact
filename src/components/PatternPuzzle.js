import React from 'react'
import PatternLock from "react-pattern-lock";
import Button from "@mui/material/Button";
import axios from 'axios';
import { verify } from '../utils.js/passwords';

const PatternPuzzle = (props) => {
    const [path, setPath] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);


    const reset = () => {
        // Renable the pattern
        setDisabled(false);
        // Clear the pattern.
        setPath([]);
    };

    const submit = () => {
        // console.log(path);
        // const registerData = {
        //     userId: location.state.userId,
        //     devId: "63f08d47f46666dfb8fdf1f8",
        //     password: path
        // };
        // axios.post('/register', registerData)
        //     .then((response) => {
        //         console.log(response)
        //         props.onSuccess();
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         props.onFailure();
        //     });

        console.log(path);
        const loginData = {
            userId: props.userId,
            password: path.join(',')
        };
        console.log('loginData ' + loginData.password)

        verify(loginData, props.onSuccess, props.onFailure);


    }

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
                        <Button variant="outlined" color="success" onClick={submit} style={{ marginLeft: "10px" }}>Submit</Button>
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