
import { useRef, useEffect, useState } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { useRouter } from 'next/router'
import { HeadingAOS } from './hooks'
import { Movies, MidVid, Testimonial, Upcoming, About } from './SubComponent'
import Image from 'next/image'
import Gallery from './SubComponent/Gallery'

const Home = (props) => {
  const vid = useRef()
  const [volume, setVolume] = useState(false)
  const router = useRouter()

  
  const { intro, movies, info, testimonial, gallery, event,about } = props
  return (
    <div className="home">
      
        <div className="home-video scale-up-center">
          <Image src={"https://res.cloudinary.com/standalone/image/upload/v1644246026/banner_fxm88n.jpg"} width={1900} height={1080} objectFit="contain" layout="responsive" />
          
        </div>
      <div className="home-submit">
        <HeadingAOS title={"submit"}>
          <h3>Submit For SFFA</h3>
        </HeadingAOS>
        <div className="home-submit-content" data-aos="zoom-in-up" data-aos-duration="2000">
          <a href="https://filmfreeway.com/standalonefilmfestaward">
            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528706/samples/rs_w_297_h_100_cg_true_es3bcm.jpg"} width={300} height={100} objectFit="contain" />
          </a>
        </div>
      </div>
      <div className="home-movies">
        <Movies movies={movies} />
      </div>
      <div className="home-about">
        <About about={about} />
      </div>
      <div className="home-midvid">
        <MidVid info={info} />
      </div>
      <div className="home-upcoming">
        <Upcoming event={event} />
      </div>
      <div className="home-gallery">
        <Gallery gallery={gallery} />
      </div>
      <div className="home-testimonial">
        <Testimonial testimonial={testimonial} />
      </div>
    </div>

  )
}

export default Home