import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { data } from "../../db/data";
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import Image from "next/image";
import Aos from 'aos'
import { useEffect } from "react";
import Card from "./Card";

SwiperCore.use([Pagination, Navigation]);
const Event = ({ carousel, jury, card }) => {
    const breakpoints = {
        "360": {
            slidesPerView: 2
        },
        "700": {
            slidesPerView: 3
        },
        "1200": {
            slidesPerView: 4
        },
    }
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='event'>
            <div className="event-carousel" data-aos="zoom-in-up">
                <Swiper navigation={true} pagination={true} autoplay={{ delay: 3000 }} speed={1000} loop={true}>
                    {carousel.map((d) => (
                        <SwiperSlide key={d.id}>
                            <img src={d.imageUrl} alt={d.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="event-jury">
                <div className="event-jury-heading">
                    <h1>Our Jury Member</h1>
                </div>
                <div className="event-jury-carousel" data-aos="zoom-in-up">
                    <Swiper slidesPerView={1} loop={false} spaceBetween={10} autoplay={{ delay: 3000 }} speed={1000} breakpoints={breakpoints}>
                        {
                            jury.map((d, i) => (
                                <SwiperSlide className='item' key={d.id}>
                                    <Image src={d.imageUrl} alt={d.name} width={350} height={350} />
                                    {/* <div className="detail">
                                        <h4>Ashok Kuller</h4>
                                        <div className="detail-icons">
                                            <i className="fab fa-instagram"></i>
                                            <i className="fab fa-facebook"></i>
                                        </div>
                                    </div> */}
                                    <h3>{d.name}</h3>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <div className="event-details">
                <div className="event-details-heading">
                    <h1>Upcoming Events</h1>
                </div>
                <div className="container">
                    {card.map((d) => (
                        <div key={d.id}>
                            <Card link={d.imageUrl} title={d.eventName} desc={d.info} date={d.date} redirect={d.visitUrl} id={d.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="event-submit">
                <div className="event-submit-heading">
                    <h1>Submit Fim For SSFA</h1>
                </div>
                <div className="event-submit-content" data-aos="zoom-in-up">
                    <a href="https://filmfreeway.com/standalonefilmfestaward">
                        <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528706/samples/rs_w_297_h_100_cg_true_es3bcm.jpg"} width={300} height={100} objectFit="contain" />
                    </a>
                    {/* <a href="#">
                        <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528722/samples/rs_w_398_h_100_cg_true_o6xbku.png"} width={300} height={100} objectFit="contain" />
                    </a>
                    <a href="#">
                        <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528738/samples/rs_w_480_h_100_cg_true_pvuiq4.png"} width={300} height={100} objectFit="contain" />
                    </a> */}
                </div>
            </div>
            <div className="event-rules">
                <div className="event-rules-heading">
                    <h1>Terms & Condition</h1>
                </div>
                <div className="event-rules-content" data-aos="zoom-in-up">
                    <div className="event-rules-content-left" data-aos={`zoom-in`} >
                        <ul>
                            <li>
                                <p>SFFA created history. This is a unique kind of film festival for independent filmmakers/content creators where there are no barriers to borders, languages, genres, etc. Based in California, USA, this festival is having an online Award Nomination Festival, live screenings, and the Standalone film award festival in Los Angeles.</p>
                            </li>
                            <li>
                                <p>SFFA is consolidating filmmakers around the world for a wonderful presentation of cinematography and the unveiling of new talents. A committee comprising members from the film industry preview submitted films and select good works of motion pictures for the Award Nomination Festival.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="event-rules-content-right" data-aos={`zoom-in-down`}>
                        <ul>
                            <li>
                                <p>The selected films participate in The Online Awards nomination Festival which is held between Jan-April. In the 2021 year, due to the pandemic situation, it was between February 1, and March 31, at our virtual theatre, available online across the World.</p>
                            </li>
                            <li>
                                <p>The selected films participate in The Online Awards nomination Festival which is held between Jan-April. In the 2021 year, due to the pandemic situation, it was between February 1, and March 31, at our virtual theatre, available online across the World.Films screen through this secure server screener where visitors and guests from around the world can witness and vote for the film. On the basis of viewers' choice and votes, films are nominated for 42 categories of Awards which screen live from the last week of May at Hollywood and to honor filmmakers, actors, technicians at The Standalone Awards Show in Los Angeles on the 7th day of live screenings.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="event-rules-content" data-aos="zoom-in-up">
                    <div className="event-rules-content-left" data-aos={`zoom-in`} >
                        <ul>

                            <li>
                                <p>We will screen all award-nominated films here as well as we are looking forward to creating year-round screening, filmmaking, and writing opportunities and to that end we are launching new festivals as part of the Standalone Film Festival & Awards.</p>
                            </li>
                            <li>
                                <p>In 2021, The film festival Award venue was the iconic TCL Chinese Theatre, in the year 2022, the Standalone film award festival in Los Angeles will again be in the heart of Hollywood.  </p>
                            </li>
                        </ul>
                    </div>
                    <div className="event-rules-content-right" data-aos={`zoom-in-down`}>
                        <ul>
                            <li>
                                <p>standalone awards Submissions are for feature narratives, Short films, Shows, Series, documentaries, and animation as even experimental films and music videos.</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Event

// 
