import React from "react"
import './DropDownElement.css';

const DropDownElement = ({names, onClick, title, hidden}) => (
    <div className="dropdown" hidden={hidden}>
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false">
            {title}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
                names.map((name, index) => (
                    <a className="dropdown-item" onClick={(e) => onClick(name.name)}>
                        {name.name}
                    </a>
                ))
            }
        </ul>
    </div>
);

export default DropDownElement;