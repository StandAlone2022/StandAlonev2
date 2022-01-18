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
                    <a href="www.ssfa.com">
                        <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528706/samples/rs_w_297_h_100_cg_true_es3bcm.jpg"} width={300} height={100} objectFit="contain" />
                    </a>
                    <a href="www.ssfa.com">
                        <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528722/samples/rs_w_398_h_100_cg_true_o6xbku.png"} width={300} height={100} objectFit="contain" />
                    </a>
                    <a href="www.ssfa.com">
                        <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528738/samples/rs_w_480_h_100_cg_true_pvuiq4.png"} width={300} height={100} objectFit="contain" />
                    </a>
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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem ducimus eveniet quam ullam repellat dicta delectus earum velit repudiandae fugit, doloribus, reprehenderit laborum vel fuga dolor sapiente. Incidunt, suscipit.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem ducimus eveniet quam ullam repellat dicta delectus earum velit repudiandae fugit, doloribus, reprehenderit laborum vel fuga dolor sapiente. Incidunt, suscipit.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="event-rules-content-right" data-aos={`zoom-in-down`}>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae laudantium iusto voluptatem? Aut exercitationem doloribus quos. Beatae est facilis, quaerat cum sunt consectetur iusto aliquam illo quos soluta sint?</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae laudantium iusto voluptatem? Aut exercitationem doloribus quos. Beatae est facilis, quaerat cum sunt consectetur iusto aliquam illo quos soluta sint?</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="event-rules-content" data-aos="zoom-in-up">
                    <div className="event-rules-content-left" data-aos={`zoom-in`} >
                        <ul>

                            <li>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem ducimus eveniet quam ullam repellat dicta delectus earum velit repudiandae fugit, doloribus, reprehenderit laborum vel fuga dolor sapiente. Incidunt, suscipit.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem ducimus eveniet quam ullam repellat dicta delectus earum velit repudiandae fugit, doloribus, reprehenderit laborum vel fuga dolor sapiente. Incidunt, suscipit.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="event-rules-content-right" data-aos={`zoom-in-down`}>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae laudantium iusto voluptatem? Aut exercitationem doloribus quos. Beatae est facilis, quaerat cum sunt consectetur iusto aliquam illo quos soluta sint?</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae laudantium iusto voluptatem? Aut exercitationem doloribus quos. Beatae est facilis, quaerat cum sunt consectetur iusto aliquam illo quos soluta sint?</p>
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
