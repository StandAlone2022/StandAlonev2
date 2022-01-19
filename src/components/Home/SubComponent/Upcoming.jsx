import { HeadingAOS, Visible } from '../hooks'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper'
import Link from 'next/link';

SwiperCore.use([Autoplay])

const Upcoming = ({ event }) => {
    const data = event[0]


    return (
        <>
            <HeadingAOS title={"upcoming"}>
                Upcoming Events
            </HeadingAOS>
            <Visible run={false}>
                <div className="pad-3">
                    <div className="home-upcoming-content">
                        <div className="home-upcoming-content-image">
                            <Swiper autoplay={{ delay: 2000 }} loop={true} speed={600}>
                                {data.imageUrl.map((d) => (
                                    <SwiperSlide key={d}>
                                        <img src={d} alt="" />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                        <div className="home-upcoming-content-detail">
                            <h2>{data.title}</h2>
                            <p>{data.detail}</p>
                            <div className="reg-button">
                                <a href={data.redirectUrl} target="_blank" style={{width:"100%"}} rel="noreferrer">
                                    <button>
                                        Show More
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* <div className="remaining">
                        <p>Registration Ends In :- </p>
                        <p>13d : 12h : 10m</p>
                    </div> */}
                </div>
            </Visible>

        </>
    )
}

export default Upcoming
