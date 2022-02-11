import Image from "next/image"
import Aos from "aos"
import { useEffect, useState } from "react"
import Typist from "react-typist"

import SwiperCore, { Autoplay } from 'swiper'
import Card from "./Card"
import { data } from "../../db/data"

SwiperCore.use([Autoplay])

const About = ({ team, about }) => {
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
                    <div className="about-intro-detail-title" >
                        <Typist cursor={{ show: false }} avgTypingDelay={100}>
                            <h1>{about.name}</h1>
                            <p style={{marginTop:".2rem"}}>Founder of StandAlone</p>
                        </Typist>
                    </div>
                    <div className="about-intro-detail-content">
                        <p>{about.info}</p>
                    </div>
                </div>
                <div className="about-intro-image">
                    <div className="about-intro-image-outer">
                        <Image src={about.imageUrl} height={500} width={500} objectFit="cover" />
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
                    {team.map((d) => (
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
