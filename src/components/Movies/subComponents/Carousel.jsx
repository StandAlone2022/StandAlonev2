import Link from 'next/link'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import Image from 'next/image'
import Aos from 'aos'
import { useEffect } from 'react'

SwiperCore.use([Autoplay])

const Carousel = ({ data, heading, speed, link }) => {
    const breakpoints = {
        "380": {
            slidesPerView: 1
        },
        "630": {
            slidesPerView: 2
        },
        "1150": {
            slidesPerView: 3
        },
        "1600": {
            slidesPerView: 4
        },
        "2100":{
            slidesPerView: 5
        },
        "2500":{
            slidesPerView: 6
        },
    }
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div className="movies-carousel-heading">
                <h2>{heading}</h2>
                <Link href={link ? `/movies/${link}` : "/"}>
                    <h4>See More</h4>
                </Link>
            </div>
            <div className="movies-carousel-content" data-aos="zoom-in">
                <Swiper slidesPerView={1} spaceBetween={10} autoplay speed={speed ? speed : 600} breakpoints={breakpoints} >
                    {
                        data.map((d, i) => (
                            <SwiperSlide className='movies-carousel-content-item' key={d.id}>
                                <Image src={d.image} width={500} height={300} objectFit="contain" />
                                <div className="detail">
                                    <h3>{d.title}</h3>
                                    {/* <div className="rating">
                                        <i className="fas fa-star" />
                                        <p>{d.rating}</p>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </>
    )
}

export default Carousel
