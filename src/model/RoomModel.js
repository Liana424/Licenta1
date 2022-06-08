import {EventEmitter} from "events"


class RoomModel extends EventEmitter{
    constructor() {
        super();
        this.state = {
            rooms: []
        };

    }

    addRooms(newRooms) {
        this.state.rooms = [
            ...newRooms
        ];
    }


    getRooms() {
        return this.state.rooms;
    }
}

const RoomModelInstance = new RoomModel();

export default RoomModelInstance;