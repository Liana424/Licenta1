import {EventEmitter} from "events"
import RoomModelInstance from "../model/RoomModel";
import RestClient from "../rest/RestClient";


const client = new RestClient("liana", "liana");

class RoomPresenter extends EventEmitter {
    constructor() {
        super();
       RoomModelInstance.on("event", event => {
            this.emit("event", event)
        })
    }



    // async getAccommodationByCityName(city) {
    //     return client.findAccommodationByCityName(city);
    // }

    async getRooms() {
        const rooms = await client.loadAllRooms();
        RoomModelInstance.addRooms(rooms);

        return RoomModelInstance.getRooms();
    }


}

const RoomPresenterInstance = new RoomPresenter();

export default RoomPresenterInstance;