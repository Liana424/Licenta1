import {EventEmitter} from "events"
import AccommodationModelInstance from "../model/AccommodationModel";
import RestClient from "../rest/RestClient";

const client = new RestClient("liana", "liana");

class AccommodationPresenter extends EventEmitter {
    constructor() {
        super();
        AccommodationModelInstance.on("event", event => {
            this.emit("event", event)
        })
    }



   // async getAccommodationByCityName(city) {
   //     return client.findAccommodationByCityName(city);
   // }

    async getAccommodations() {
        const accommodations = await client.loadAllAccommodations();
        AccommodationModelInstance.addAccommodations(accommodations);

        return AccommodationModelInstance.getAccommodations();
    }

    async getAccommodationsFromCity(cityName) {
        const accommodations = await client.loadAllAccommodationsFromCity(cityName);

        return accommodations;
    }


}

const AccommodationPresenterInstance = new AccommodationPresenter();

export default AccommodationPresenterInstance;