import {EventEmitter} from "events"
import EventModelInstance from "../model/EventModel";
import RestClient from "../rest/RestClient";

const client = new RestClient("liana", "liana");

class CityPresenter extends EventEmitter {
    constructor() {
        super();
        EventModelInstance.on("event", event => {
            this.emit("event", event)
        })
    }

    async getCities() {
        const cities = await client.loadAllCities();

        return cities;
    }

    async getCitiesFromCountry(countryName) {
        const cities = await client.loadAllCitiesFromCountry(countryName);

        return cities;
    }
}

const CityPresenterInstance = new CityPresenter();

export default CityPresenterInstance;