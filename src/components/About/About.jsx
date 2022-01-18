import Image from "next/image"
import Aos from "aos"
import { useEffect, useState } from "react"
import Typist from "react-typist"

import SwiperCore, { Autoplay } from 'swiper'
import Card from "./Card"
import { data } from "../../db/data"

SwiperCore.use([Autoplay])

const About = ({ team }) => {
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
        const { innerWidth } = window

        if (innerWidth <= 952) {
            setAnimate(true)
        } else {
            setAnimate(false)
        }
        Aos.init()

    }, [animate])

    return (
        <div className='about'>
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-intro" data-aos="zoom-in">
                <div className="about-intro-detail">
                    <div className="about-intro-detail-title">
                        <Typist cursor={{ show: false }} avgTypingDelay={100}>
                            <h1>Mr Khullar</h1>
                        </Typist>
                    </div>
                    <div className="about-intro-detail-content">
                        <p>The Standalone Film Festival & Awards is one of the most Biggest International Independent film festival Awards .
                            It provides a common platform for the cinemas of the world to project the excellence of the motion picture industry.
                            SFFA is designed for the independent films across the world giving them a platform to launch their movie worldwide. The films are the result of the persistent efforts of dreamers, from internet celebrities to famous directors who have been working in the film industry for half a century, all of whom have never forgotten their originality and promoting the culture of their country.
                            The Standalone Film Festival is an event unlike any other in the film industry, showing films from around the world for the public for a week so that people can contribute to the understanding and appreciation of film cultures of different nations and learn about their cultures, customs, women in the workplace, and art in other countries without traveling the world. Films from the U.S., Iran, India, China and Latin America are categorized by category. It also celebrates their films for the LGBT community.</p>


                    </div>
                </div>
                <div className="about-intro-image">
                    <div className="about-intro-image-outer">
                        <Image src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png" height={500} width={500} objectFit="cover" />
                    </div>
                </div>
            </div>
            <div className="about-detail">
                <div className="about-detail-vision" data-aos={`zoom-in`} >
                    <div className="about-detail-vision-title">
                        <h2>Vision</h2>
                    </div>
                    <div className="about-detail-vision-content">
                        <p>To make the dream come true of the independent movie makers so that they can launch their movies for which they have put their entire life.</p>
                    </div>
                </div>
                <div className="about-detail-mission" data-aos={`zoom-in-down`}>
                    <div className="about-detail-mission-title">
                        <h2>Mission</h2>
                    </div>
                    <div className="about-detail-mission-content">
                        <p>To support Independent movie makers across globe to showcase their talent.</p>
                    </div>
                </div>
            </div>

            <div className="about-team">
                <div className="about-team-title" data-aos="zoom-in">
                    <h1>Our Team</h1>
                </div>
                <div className="about-team-content" data-aos="zoom-in">
                    {team.map((d) =>  (
                        <div key={d.id}>
                            <Card img={d.imageurl} name={d.name} role={d.role} about={d.detail} id={d.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
