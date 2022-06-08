import React, {useEffect, useState} from "react";
import Room from "../presentational/Room";
import RoomPresenterInstance from "../presenter/RoomPresenter";


function SmartRoom()  {
    const [rooms, setRooms] = useState([]
        // name: "",
        //  address: ""
    );

    const modifyRooms = (newRooms) => {
        setRooms([
            ...newRooms
        ])
    };


    useEffect(() => {
        RoomPresenterInstance.getRooms().then(modifyRooms)
    }, []);





    return (
        <Room rooms={rooms}/>
    );
}

export default SmartRoom;