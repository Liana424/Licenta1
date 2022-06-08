import React from "react"
import Navbar from "../Navbar";


const Event = ({events}) => (

    <div>

        <React.StrictMode>
            <Navbar/>
        </React.StrictMode>

        <div className="container">
            <div>{events.length}</div>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                  crossOrigin="anonymous"/>

            <form>
                <div className={"col-md-3"}>
                    <label> Event: </label>
                    <input className={"form-control"}/>
                </div>
                <div className={"col-md-3"}>
                    <label> Type: </label>
                    <input className={"form-control"}/>
                </div>
                <br/>
            </form>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    events.map((event, index) => (
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"/>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Event image</text>
                                </svg>

                                <div className="card-body">
                                    <p className="card-text">{event.name}</p>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text">{event.type}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View event page
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    </div>


);

export default Event;