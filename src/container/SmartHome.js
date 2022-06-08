import React, {useEffect, useState} from "react";
import Home from "../presentational/Home";
import CountryPresenterInstance from "../presenter/CountryPresenter";
import CityPresenterInstance from "../presenter/CityPresenter";


function SmartHome() {
    const [date, setDate]=useState();
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [countryTitle, setCountryTitle] = useState("Choose Country")
    const [countryName, setCountryName] = useState("")
    const [cityTitle, setCityTitle] = useState("Choose City")
    const [cityName, setCityName] = useState("")
    const [hidden, setHidden] = useState(true);
    const [startDateTitle, setStartDateTitle] = useState("Choose Start Date")
    const [startDate, setStartDate] = useState("")
    const [endDateTitle, setEndDateTitle] = useState("Choose End Date")
    const [endDate, setEndDate] = useState("")



    useEffect(() => {
        CountryPresenterInstance.getCountries().then(foundCountries => {
            setCountries([
                ...foundCountries
            ])
        });
        CityPresenterInstance.getCities().then(foundCities => {
            setCities([
                ...foundCities
            ])
        });
    }, []);

    const onClickCountry = (value) => {
        console.log(value);
        setCountryName(value);
        setCountryTitle(value);
        const filteredCities = cities.filter(city => city.countryDto.name === value);
        setCities([
            ...filteredCities
        ]);
        setHidden(false);
    }

    const onClickCity = (value) => {
        console.log(value);
        setCityName(value);
        setCityTitle(value);
    }

    const onClickStartDate = (value) => {
        console.log(value);
        setStartDate(value);
    }
    const onClickEndDate = (value) => {
        console.log(value);
        setEndDate(value);
    }
    const onClickSearch = () => {
        //aici facem redirect catre pagina cu evenimente
        window.location.assign("/#/event/" + cityName + "/" + startDate + "&" + endDate)
    }

    return (
        <Home countries={countries} onClickCountry={onClickCountry} countryTitle={countryTitle}
              cities={cities} onClickCity={onClickCity} cityTitle={cityTitle} hidden={hidden}
              onClickStartDate={onClickStartDate} startDateTitle={startDateTitle}
              onClickEndDate={onClickEndDate} endDateTitle={endDateTitle} onClickSearch={onClickSearch}/>
    );
}

export default SmartHome;