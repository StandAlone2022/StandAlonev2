import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectCoverflow, Pagination, Autoplay
} from 'swiper';
import { HeadingAOS, Visible } from '../hooks';

import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { data } from '../../../db/data';



SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Movies = ({movies}) => {

    const breakpoints = {
        "410": {
            slidesPerView: 2
        },
        "640": {
            slidesPerView: 3,
        },
        "1000": {
            slidesPerView: 4
        }
    }
    return (
        <>
            <HeadingAOS title={"movies"}>Movies</HeadingAOS>

            <Visible run={false}>
                <div className="home-movies-cards">
                    <div className="home-movies-cards-center">
                        <Swiper effect={'coverflow'} grabCursor={true} breakpoints={breakpoints} centeredSlides={true} slidesPerView={1} coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": false
                        }} pagination={false} className="mySwiper" loop={true} autoplay={{ delay: 2000 }}
                            onActiveIndexChange={(en) => console.log(en.activeIndex, 'slide Changed')}
                            speed={600}
                        >
                            {
                                movies.map((d, i) => i < 10 && (
                                    <SwiperSlide className='home-movies-cards-center-items' key={d.id} >
                                        <img src={d.image} />
                                        <div className="detail">
                                            <h3>{d.title}</h3>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </Visible>
        </>
    )
}

export default Movies
