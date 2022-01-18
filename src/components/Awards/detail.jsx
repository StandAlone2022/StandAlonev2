import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import Aos from "aos"
import { useEffect } from "react"

const Detail = ({ data,speed,title }) => {
    const breakpoints={
        "300":{
            slidesPerView: 1
        },
        "600":{
            slidesPerView: 2
        },
        "1200":{
            slidesPerView: 3
        },
        "1600":{
            slidesPerView: 4
        },
        "2200":{
            slidesPerView: 5
        },
        "2600":{
            slidesPerView: 6
        },
    }
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <>
            <div className="awards-detail-heading" >
                <h1>{title}</h1>
            </div>
            <div className="awards-detail-carousel" data-aos="zoom-in">
                <Swiper slidesPerView={1} loop={true} spaceBetween={10} autoplay={{ delay: 3000 }} speed={speed ? speed : 600} breakpoints={breakpoints}>
                    {data.map((d) => (
                        <SwiperSlide className='item' key={d.id}>
                            <Image src={d.imageUrl} alt={d.name} width={500} height={300} />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Detail
