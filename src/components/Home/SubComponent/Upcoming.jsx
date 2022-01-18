import { HeadingAOS, Visible } from '../hooks'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper'
import Link from 'next/link';

SwiperCore.use([Autoplay])

const Upcoming = () => {

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
                                <SwiperSlide>
                                    <img src="https://www.eventfaqs.com/uploads/News/Content/iaa-title3.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://3.imimg.com/data3/CK/HV/MY-10570443/corporate-events-500x500.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://learn.g2crowd.com/hubfs/Stock%20images/borna-bevanda-377277-unsplash.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="home-upcoming-content-detail">
                            <h2>Lazarus Pit</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vel pariatur consectetur doloribus aperiam soluta provident odio porro quasi ab repudiandae nostrum accusamus sed fugiat unde dolore, saepe, omnis aliquam.</p>
                            <div className="reg-button">
                                <Link passHref href={"/upcoming"}>
                                    <button>
                                        Show More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="remaining">
                        <p>Registration Ends In :- </p>
                        <p>13d : 12h : 10m</p>
                    </div>
                </div>
            </Visible>

        </>
    )
}

export default Upcoming
