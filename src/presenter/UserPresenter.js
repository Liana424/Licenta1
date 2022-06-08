import {EventEmitter} from "events"
import UserModelInstance from "../model/UserModel";
import RestClient from "../rest/RestClient";

let client;

class UserPresenter extends EventEmitter {
    constructor() {
        super();
        UserModelInstance.on("event", event => {
            this.emit("event", event)
        })
    }

    // async addUser(newUser) { /////
    //     const user = await client.createUser(newUser)
    //
    //     return UserModelInstance.addUser(newUser);
    // }

    async onLogin(username, password) {
        client = new RestClient(username, password);

        return client.logIn().then(value => {
            if (!value) return false;
            value.password = password;
            UserModelInstance.login(value);
            return true;
        })
    }

}

const UserPresenterInstance = new UserPresenter();

export default UserPresenterInstance;