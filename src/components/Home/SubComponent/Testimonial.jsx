import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { useEffect, useRef, useState } from 'react'
import { HeadingAOS, Visible } from '../hooks'
import TestimmonialVideo from './TestimmonialVideo'
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { blurBackground } from "../../../../redux/action"


SwiperCore.use([Autoplay])

const Testimonial = ({ testimonial }) => {
    const [link, setLink] = useState("")
    const [show, setShow] = useState(false)
    const onClickHandler = () => {
        setShow(true)
    }
    const dispatch = useDispatch()

    const breakpoints = {
        "710": {
            slidesPerView: 2
        },
        "1100": {
            slidesPerView: 3
        }
    }
    useEffect(() => {
        localStorage.setItem('blur', show)
        dispatch(blurBackground(show))
    }, [show, dispatch,link])

    return (
        <>
            <HeadingAOS title={"testimonial"}>
                Testimonial
            </HeadingAOS>
            <Visible run={false} >
                <div className="pad-3 scale-up-center" >
                    <div className="home-testimonial-content">
                        <Swiper loop={true} slidesPerView={1} spaceBetween={50} breakpoints={breakpoints} autoplay speed={600}>
                            {testimonial.map((d) => (
                                <SwiperSlide className='home-testimonial-content-item' onClick={onClickHandler} key={d.id}>
                                    <Image src={d.posterUrl} width={560} height={320} />
                                    <div className="play-button" onClick={()=>setLink(d.videoUrl)} >
                                        <div className="play-button-circle" >
                                            <i className="fas fa-play"></i>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                </div>
            </Visible>
            {show && (
                <TestimmonialVideo link={link} setShow={setShow} show={show} />
                // <TestimmonialVideo link={"Axmg1E4HrVE"} iframe={true} setShow={setShow} />
            )}

        </>
    )
}

export default Testimonial
