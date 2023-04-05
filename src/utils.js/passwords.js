import axios from 'axios';

export function verify(loginData, onSuccess, onFailure) {
    axios.post('http://127.0.0.1:5000/user/login', loginData)
        .then((response) => {
            console.log(response)
            onSuccess();
        })
        .catch((err) => {
            console.log(err)
            onFailure();
        });
}