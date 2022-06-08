import React from "react"
import Navbar from "../Navbar";
import  './Home.css';


const Room = ({rooms}) => (

    <div>

        <React.StrictMode>
            <Navbar />
        </React.StrictMode>

        <div className="container">


            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                  crossOrigin="anonymous"/>

            <div className="container" >

                <h2>Available rooms</h2>

            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    rooms.map((room, index) => (
                        <section id="courses" className="courses" >
                        <div className="container" data-aos="fade-up">
                            <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <img src="" className="img-fluid" alt="..."/>
                                        <div className="course-content">
                                            <h3><a>Type:{room.type}</a></h3>
                                            <p>Description:{room.description}</p>
                                            <div className="trainer d-flex justify-content-between align-items-center">
                                                <div className="country d-flex align-items-center">
                                                    <img src=""/*src={require('')} */ className="img-fluid" alt=""/>
                                                    <span>Price:$/night</span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        </section>

                    ))

                }

            </div>




        </div>



    </div>


);

export default Room;