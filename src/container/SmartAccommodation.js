import React, {useEffect, useState} from "react";
import Accommodation from "../presentational/Accommodation";

import AccommodationPresenterInstance from "../presenter/AccommodationPresenter";
import CountryPresenterInstance from "../presenter/CountryPresenter";
import CityPresenterInstance from "../presenter/CityPresenter";


function SmartAccommodation()  {
    const [accommodations, setAccommodations] = useState([]
       // name: "",
      //  address: ""
    );
    const [date, setDate]=useState();


 //   const modifyAccommodations = (newAccommodations) => {
  //      setAccommodations([
  //          ...newAccommodations
    //    ])
    //};

   // const {city} = useParams();

    useEffect(() => {

        AccommodationPresenterInstance.getAccommodations().then(foundAccommodations => {
            setAccommodations([
                ...foundAccommodations
            ])
        });
    }, []);
    console.log("Date, date");





    return (
        <Accommodation accommodations={accommodations}/>
    );
}

export default SmartAccommodation;