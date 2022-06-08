import React, {useState} from "react"

import  './Login.css';
import { useLocalState } from "../util/useLocalStorage";

const Login = ({username, password, onLogin, onChangeUsername, onChangePassword}) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    //
    // const [jwt, setJwt] = useLocalState("", "jwt");
    // function sendLoginRequest(){
    //     const reqBody = {
    //         username: username,
    //         password: password,
    //     };
    //
    //     fetch("http://localhost:8080/api/auth/login",{
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         method: "post",
    //         body:JSON.stringify(reqBody)
    //     })
    //         .then((response) => {
    //             if(response.status === 200)
    //           return Promise.all([response.json(), response.headers]);
    //             else
    //                 return Promise.reject("Invalid login attempt");
    //         })
    //         .then(([body, headers]) => {
    //             setJwt(headers.get("authorization"));
    //             window.location.assign("/#")
    //
    //         }).catch((message) => {
    //             alert(message);
    //     });
    // }

    return (

        <>
            <div className={"text-center"}
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <form className={"form-signin"}>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                          crossOrigin="anonymous"/>
                    <h2>Welcome back!</h2>

                    <br/>
                    <div className={"form-floating"}>
                        <label htmlFor={"floatingInput"}>Username: </label>
                        <input className={"form-control"} value={username} onChange={(e) => onChangeUsername(e .target.value)}/>
                    </div>

                    <br/>
                    <div className={"form-floating"}>
                        <label htmlFor={"floatingPassword"}>Password: </label>
                        <input className={"form-control"} value={password} onChange={(e) => onChangePassword(e.target.value)}/>
                    </div>

                    <button id="submit" className={"btn btn-primary"} onClick={() => onLogin(username, password)}>Sign in</button>

                </form>
            </div>
        </>
    );
};

export default Login;