
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

  useEffect(() => {
    if (vid !== undefined) {
      if (volume) {
        vid.current.muted = false;
      } else {
        vid.current.muted = true;
      }

      document.addEventListener("visibilitychange", function () {
        const state = document.visibilityState;
        if (!vid.current.paused) {
          if (state === "hidden") {
            vid.current.pause()
          } else {
            vid.current.play()
          }
        }
      })
    }
  }, [volume]);
  const ChangeHandler = (visible) => {
    if (!visible) {
      vid.current.pause()
    } else {
      vid.current.play()
    }
  }
  const {intro,movies,info,testimonial,gallery,event}=props
  return (
    <div className="home">
      <ReactVisibilitySensor onChange={ChangeHandler}>
        <div className="home-video scale-up-center">
          <video src={intro[0].videoUrl} autoPlay muted ref={vid} />
          {
            volume ? (
              <div className="home-video-unmute" onClick={() => setVolume(false)}>
                <i className="fas fa-volume-up"></i>
              </div>
            ) : (
              <div className="home-video-mute" onClick={() => setVolume(true)}>
                <i className="fas fa-volume-mute"></i>
              </div>
            )
          }
        </div>
      </ReactVisibilitySensor>
      <div className="home-movies">
        <Movies movies={movies} />
      </div>
      <div className="home-about">
        <About />
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
      <div className="home-submit">
        <HeadingAOS title={"submit"}>
          <h3>Submit For SAFF</h3>
          </HeadingAOS>
        <div className="home-submit-content" data-aos="zoom-in-up" data-aos-duration="2000"> 
          <a href="www.ssfa.com">
            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528706/samples/rs_w_297_h_100_cg_true_es3bcm.jpg"} width={300} height={100} objectFit="contain" />
          </a>
          <a href="www.ssfa.com">
            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528722/samples/rs_w_398_h_100_cg_true_o6xbku.png"} width={300} height={100} objectFit="contain" />
          </a>
          <a href="www.ssfa.com">
            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640528738/samples/rs_w_480_h_100_cg_true_pvuiq4.png"} width={300} height={100} objectFit="contain" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Home