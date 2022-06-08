import React, {useEffect, useState} from "react";
import Event from "../presentational/Event";
import EventPresenterInstance from "../presenter/EventPresenter";
import {useParams} from "react-router-dom";


function SmartEvent() {
    const [events, setEvents] = useState([]);

    const modifyEvents = (newEvents) => {
        setEvents([
            ...newEvents
        ])
    };

    const{cityName} = useParams();
    const{startDate} = useParams();
    const{endDate} = useParams();

    useEffect(() => {
        EventPresenterInstance.getEventsFromCityBetweenDates(startDate, endDate, cityName).then(modifyEvents);

        // EventPresenterInstance.on("event", modifyEvents)
        //
        // return () => {
        //     EventPresenterInstance.removeListener("event", modifyEvents);
        // }
    }, []);

    return (
        <Event events={events}/>
    );
}

export default SmartEvent;