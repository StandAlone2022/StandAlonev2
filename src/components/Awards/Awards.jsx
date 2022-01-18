import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Years from "./years"
import { data } from "../../db/data"
import Aos from "aos"

import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect } from "react"

SwiperCore.use([Navigation, Pagination, Autoplay])

const Awards = ({ movie, carousel }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='awards'>
            <div className="awards-carousel">
                <Swiper navigation={true} pagination={true} autoplay={{ delay: 3000 }} speed={1000} loop={true}>
                    {carousel.map((d) => (
                        <SwiperSlide key={d.id}> 
                            <img src={d.imageUrl} alt={d.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="awards-dates">
                <div className="awards-dates-heading">
                    <i className="fas fa-award"></i>
                    <h1>Awards</h1>
                    <i className="fas fa-award"></i>
                </div>
                <div className="awards-dates-content">
                    <Years year={2021} link={"2021"} data={movie} speed={600} />
                    <Years year={2020} link={"2020"} data={movie} speed={800} />
                    <Years year={2019} link={"2019"} data={movie} speed={1000} />
                </div>
            </div>
        </div>
    )
}

export default Awards
