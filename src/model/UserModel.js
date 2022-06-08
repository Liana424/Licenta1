import {EventEmitter} from "events"

//import WebSocketListenerInstance from "../ws/WebSocketListener";


class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [],
            loggedInUser: {
                id: 0,
                username: "",
                password: ""
            }//,
            // newUser: {
            //     id: 0,
            //     username: "",
            //     password: ""
            // }
        };
        // WebSocketListenerInstance.on("USER_CREATED", event => {
        //     UserModelInstance.addUser(event.user);
        //     this.emit("event", this.state.users);
        // })
    }

    addUsers(newUsers) {
        this.state.users = [
            ...newUsers
        ];
    }

    addUser(newUser) {
        this.state.users = [
            ...this.state.users,
            {
                ...newUser

            }
        ];
    }

    // getNewUser() {
    //     return [this.state.newUser];
    // }

    // changeNewUserProperty(property, value) {
    //     this.state = {
    //         ...this.state,
    //         newUser: {
    //             ...this.state.newUser,
    //             [property]: value
    //         }
    //     };
    // }

    login(user){
        this.state = {
            ...this.state,
            loggedInUser: user
        }
    }

    getLoggedInUser() {
        return this.state.loggedInUser;
    }


}

// folosim Singleton Design Pattern
const UserModelInstance = new UserModel();

export default UserModelInstance;