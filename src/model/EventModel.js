import {EventEmitter} from "events"
//import WebSocketListenerInstance from "../ws/WebSocketListener";


class EventModel extends EventEmitter{

    constructor() {
        super();
        this.state = {
            events: []
        };
        // WebSocketListenerInstance.on("EVENT_CREATED", event => {
        //     EventModelInstance.addEvent(event.event);
        //     this.emit("event", this.state.events);
        // })
    }

    addEvents(newEvents) {
        this.state.events = [
            ...newEvents
        ];
    }

    getEvents() {
        return this.state.events;
    }




}





// folosim Singleton Design Pattern
const EventModelInstance = new EventModel();

export default EventModelInstance;