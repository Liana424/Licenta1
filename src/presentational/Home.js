import React, {useState} from "react"
import './Home.css';
import '../Navbar.css';
import Navbar from "../Navbar";
import DropDownElement from "./DropDownElement";
import DatePicker from "./DatePicker";

const Home = ({countries, onClickCountry, countryTitle,
                  cities, onClickCity, cityTitle, hidden,
                  onClickStartDate, onClickEndDate, startDateTitle,endDateTitle,onClickSearch}) => (

    <div>
        <React.StrictMode>
            <Navbar/>
        </React.StrictMode>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"/>
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                <h1>
                    Find the most amazing
                </h1>
                <h1>
                    events!
                </h1>

                <div className="d-flex">
                    <DropDownElement names={countries} onClick={onClickCountry} title={countryTitle} hidden={false}/>
                    <DropDownElement names={cities} onClick={onClickCity} title={cityTitle} hidden={hidden}/>

                </div>

                <DatePicker onClickDate = {onClickStartDate} title={startDateTitle}/>
                <DatePicker onClickDate = {onClickEndDate} title={endDateTitle}/>
                <button id="submit" className={"btn btn-primary"} onClick={onClickSearch} >Search</button>
            </div>
        </section>

        <div className="container">

            <h2>Popular events</h2>

        </div>

        <section id="courses" className="courses">
            <div className="container" data-aos="fade-up">
                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                            <img src={"https://media.resources.festicket.com/www/photos/3694-artwork.jpg"} className="img-fluid" alt=""/>
                            <div className="course-content">
                                <h3><a>UNTOLD festival</a></h3>
                                <p>Untold Festival is the largest music festival in Romania. It takes place every year
                                    on Cluj Arena in Cluj Napoca.</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="country d-flex align-items-center">
                                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/250px-Flag_of_Romania.svg.png"} className="img-fluid" alt=""/>
                                        <span>Romania</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                            <img src={"https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/opengraph/tomorrowland.jpg"} className="img-fluid" alt="..."/>
                            <div className="course-content">
                                <h3><a>Tomorrowland</a></h3>
                                <p>Tomorrowland is one of the largest electronic music festivals in the world, held
                                    annually in the Belgian city of Boom, on sixteen stages covering an area of 75
                                    hectares, the main stage stretching 160 meters</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="country d-flex align-items-center">
                                        <img src={"https://qph.cf2.quoracdn.net/main-qimg-fce7abf661b659f1845f699e91be44c5-pjlq"}/*src={require('')} */ className="img-fluid" alt=""/>
                                        <span>Belgium</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                            <img src={"https://indiehoy.com/wp-content/uploads/2016/11/lolla-.jpg"} className="img-fluid" alt="..."/>
                            <div className="course-content">
                                <h3><a>Lollapalooza</a></h3>
                                <p>Lollapalooza is an annual music festival that brings together popular bands of
                                    alternative rock, heavy metal, punk rock and hip hop, dance and comedy.</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="country d-flex align-items-center">
                                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/320px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png"}/*src={require('')} */ className="img-fluid" alt=""/>
                                        <span>Germany</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                            <img src={"https://www.italymagazine.com/sites/default/files/styles/800xauto/public/sanremo_palco.jpg?itok=h1eKhPMF"} className="img-fluid" alt="..."/>
                            <div className="course-content">
                                <h3><a>Sanremo Music Festival</a></h3>
                                <p>The Sanremo Music Festival, commonly known as just Festival di Sanremo is the most
                                    popular Italian song contest and awards ceremony, held annually in the city of
                                    Sanremo, Liguria.
                                    Unlike other awards in Italy, the Sanremo Music Festival is a competition for new
                                    songs, not an award to previous successes.
                                </p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="country d-flex align-items-center">
                                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png"}/*src={require('')} */ className="img-fluid" alt=""/>
                                        <span>Italy</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                            <img src={"https://sibfest.s3.eu-central-1.amazonaws.com/video_1_Fen_Mo_foto_credit_Beijing_Dance_Academy_42fc327d34.jpg"} className="img-fluid" alt="..."/>
                            <div className="course-content">
                                <h3><a>FITS</a></h3>
                                <p>The Sibiu International Theater Festival is one of the most important theater and
                                    performing arts festivals in the world, being the third largest in Europe.</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="country d-flex align-items-center">
                                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/255px-Flag_of_Romania.svg.png"}/*src={require('')} */ className="img-fluid" alt=""/>
                                        <span>Romania</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                            <img src={"https://www.thehollywoodnews.com/wp-content/uploads/IMG_4891-rotated.jpg"} className="img-fluid" alt="..."/>
                            <div className="course-content">
                                <h3><a>Cannes International Film Festival</a></h3>
                                <p>The Cannes Film Festival is an internationally renowned film festival that takes
                                    place every year in May in Cannes, a city in the south of France.</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                    <div className="country d-flex align-items-center">
                                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Flag_of_France_%28bordered%29.svg/1280px-Flag_of_France_%28bordered%29.svg.png"}/*src={require('')} */ className="img-fluid" alt=""/>
                                        <span>France</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        <div>
            lkjhgfdsazxcvbnm,
        </div>


    </div>
);

export default Home;