const BASE_URL = "http://localhost:8080"

class RestClient{
    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    loadAllEvents = () =>{
        return fetch(`${BASE_URL}/event`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    loadAllEventsFromCityBetweenDates = (startDate, endDate, cityName) =>{
        return fetch(`${BASE_URL}/event/filtered/`, {
            method: "POST",
            body: JSON.stringify({
                startDate: startDate,
                endDate: endDate,
                cityName: cityName
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    loadAllCountries = () =>{
        return fetch(`${BASE_URL}/country`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    loadAllCities = () =>{
        return fetch(`${BASE_URL}/city`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    loadAllCitiesFromCountry = (countryName) =>{
        return fetch(`${BASE_URL}/city/countryname=${countryName}`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    loadAllAccommodationsFromCity = (cityName) =>{
        return fetch(`${BASE_URL}/accommodation/cityname=${cityName}`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }




    loadAllAccommodations = () =>{
        return fetch(`${BASE_URL}/accommodation`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    loadAllRooms = () =>{
        return fetch(`${BASE_URL}/room`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type":"application/json"
            }
        }).then(response => response.json());
    }

    logIn() {
        return fetch(`${BASE_URL}/user/login`, {
            method: "GET",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (!response.ok)
                return false;
            else
                return response.json();
        })
    }

}
export default RestClient;