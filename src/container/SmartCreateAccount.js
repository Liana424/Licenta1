import React, {useState} from "react";
import CreateAccount from "../presentational/CreateAccount";
import UserPresenterInstance from "../presenter/UserPresenter";


function SmartCreateAccount() {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        username: "",
        password: ""
    });

    const onChange = (property, newValue) => {
        setNewUser({
            ...newUser,
            [property]: newValue
        });
    };

    const onCreate = () => {
        UserPresenterInstance.addUser(newUser)

    }

    return (
        <CreateAccount
            firstName={newUser.firstName}
            lastName={newUser.lastName}
            address={newUser.address}
            email={newUser.email}
            username={newUser.username}
            onCreate={onCreate}
            onChange={onChange}/>
    );
}

export default SmartCreateAccount;

