import {EventEmitter} from "events"


class AccommodationModel extends EventEmitter{
    constructor() {
        super();
        this.state = {
            accommodations: []
        };

    }

    addAccommodations(newAccommodations) {
        this.state.accommodations = [
            ...newAccommodations
        ];
    }


    getAccommodations() {
        return this.state.accommodations;
    }
}

const AccommodationModelInstance = new AccommodationModel();

export default AccommodationModelInstance;