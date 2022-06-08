import React from "react"
import Navbar from "../Navbar";
import  './Home.css';



const Accommodation = ({accommodations}) => (

    <div>

        <React.StrictMode>
            <Navbar />
        </React.StrictMode>

        <div className="container">


            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                  crossOrigin="anonymous"/>

            <div className="container" >

                <h2>Accommodation suggestions</h2>

            </div>

            <form>
                <div className={"col-md-3"}>
                    <label> City: </label>
                    <input className={"form-control"}/>
                </div>
                
                <br/>
            </form>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                        {
                            accommodations.filter(accommodation => accommodation.cityDto.id === city.id).map((accommodation,index) => (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                            <rect width="100%" height="100%" fill="#55595c"/>
                                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">{accommodation.image}</text>
                                        </svg>

                                        <div className="card-body">
                                            <p className="card-text">{accommodation.name}</p>
                                            <p className="card-text">{accommodation.address}</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">View available rooms
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Link{accommodation.link}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )


                    )
                }
            </div>


        </div>



    </div>


);

export default Accommodation;