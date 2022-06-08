import {EventEmitter} from "events"
import EventModelInstance from "../model/EventModel";
import RestClient from "../rest/RestClient";
import UserModelInstance from "../model/UserModel";

//const client = new RestClient(UserModelInstance.getLoggedInUser().username, UserModelInstance.getLoggedInUser().password);
const client = new RestClient("liana", "liana");

class EventPresenter extends EventEmitter {
    constructor() {
        super();
        EventModelInstance.on("event", event => {
            this.emit("event", event)
        })
    }

    async getEventsFromCityBetweenDates(startDate, endDate, cityName) {
        debugger;
        const events = await client.loadAllEventsFromCityBetweenDates(startDate, endDate, cityName);
        EventModelInstance.addEvents(events);

        return EventModelInstance.getEvents();
    }

    async getEvents() {
        const events = await client.loadAllEvents();
        EventModelInstance.addEvents(events);

        return EventModelInstance.getEvents();
    }
}

const EventPresenterInstance = new EventPresenter();

export default EventPresenterInstance;