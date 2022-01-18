import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"


const Years = ({ year, link, data, speed }) => {
    const breakpoints = {
        "350": {
            slidesPerView: 1
        },
        "600": {
            slidesPerView: 2
        },
        "1200": {
            slidesPerView: 3
        },
        "1600": {
            slidesPerView: 4
        },
        "2200": {
            slidesPerView: 5
        },
    }
    return (
        <>
            <div className="awards-dates-content-heading" data-aos="zoom-in">
                <h1>{year}</h1>
                <Link passHref href={`/awards/${link}`}>
                    <i className="fas fa-arrow-right" />
                </Link>
            </div>
            <div className="awards-dates-content-carousel" data-aos="zoom-in">
                <Swiper slidesPerView={1} loop={true} spaceBetween={10} autoplay={{ delay: 3000 }} speed={speed ? speed : 600} breakpoints={breakpoints}>
                    {data.map((d) => (
                        <SwiperSlide className='item' key={d.id}>
                            <Image src={d.imageUrl} alt={d.name} width={600} height={400} />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Years
