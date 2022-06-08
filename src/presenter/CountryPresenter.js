import {EventEmitter} from "events"
import EventModelInstance from "../model/EventModel";
import RestClient from "../rest/RestClient";

const client = new RestClient("liana", "liana");

class CountryPresenter extends EventEmitter {
    constructor() {
        super();
        EventModelInstance.on("event", event => {
            this.emit("event", event)
        })
    }

    async getCountries() {
        const countries = await client.loadAllCountries();

        return countries;
    }
}

const CountryPresenterInstance = new CountryPresenter();

export default CountryPresenterInstance;