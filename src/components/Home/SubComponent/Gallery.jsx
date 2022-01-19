
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper'



SwiperCore.use([EffectCoverflow, Autoplay]);

const Gallery = ({gallery}) => {
    const breakpoints = {
        "410": {
            slidesPerView: 2,
            centeredSlides:true,
            loop: false
        },
        "640": {
            slidesPerView: 3,
            loop: false
        },
        "1000": {
            slidesPerView: 4
        }
    }
    const onClickHandler=(d,i)=>{
        setImg(d.imageUrl)
        setBlur(true)
        
    }
    return (
        <>
            <div className="gallery-content-heading">
                <h1 style={{border:"none"}}>Top Rated </h1>
            </div>
            <div className="gallery-content-img">
                <Swiper effect={'coverflow'} grabCursor={true} breakpoints={breakpoints} centeredSlides={false} slidesPerView={1} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={false} className="mySwiper" loop={false} autoplay={{ delay: 2000 }}
                    // onActiveIndexChange={(en) => console.log(en.activeIndex, 'slide Changed')}
                    speed={600}
                >
                    {
                        gallery.map((d, i) => (
                            <SwiperSlide className='movies-carousel-content-item' key={d.id} >
                                <img src={d.imageUrl} alt={d.title} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Gallery
