import React, {useEffect, useState} from "react";

import Login from "../presentational/Login";
import UserModelInstance from "../model/UserModel";
import UserPresenterInstance from "../presenter/UserPresenter";

function SmartLogin() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    // useEffect(() => {
    //     setUser([...UserModelInstance.getNewUser()])
    // })

    const onChangeUsername = (value) => {
        setUsername(value);
    }

    const onChangePassword = (value) => {
        setPassword(value);
    }

    const onLogin = (username, password) => {
        UserPresenterInstance.onLogin(username, password).then(value => {
            debugger;
            if (value) {
                // UserModelInstance.changeNewUserProperty("username", "");
                // UserModelInstance.changeNewUserProperty("password", "");
                console.log(UserModelInstance.getLoggedInUser());
                window.location.assign("/#");
            } else {
                alert("Wrong username or password");
            }
        })
    }

    return (
        <Login
            onChangeUsername={onChangeUsername}
            onChangePassword={onChangePassword}
            onLogin={onLogin}
            username={username}
            password={password}/>
    );

}

export default SmartLogin;

