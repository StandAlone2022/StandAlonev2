import React, { useEffect, useState } from 'react'
import Typist from 'react-typist'
import { HeadingAOS, Visible } from "../hooks"

const About = () => {
    const [isVis, setIsVis] = useState(false)
    const [comp1, setComp1] = useState(false)
    
    useEffect(() => {

    }, [isVis])
    return (
        <>
            <div className="home-about">
                
                    <HeadingAOS title={"about"}>About</HeadingAOS>
                
                <Visible setIsVis={setIsVis}>
                    <div className="home-about-section ">
                        <div className="section ">
                            <div className="section-image">
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/team_5.png" alt="" data-aos="zoom-out-down" />
                            </div>
                            <div className="section-detail">
                                <p>
                                The Standalone Film Festival & Awards is one of the most Biggest International Independent film festival Awards . It provides a common platform for the cinemas of the world to project the excellence of the motion picture industry.  SFFA is designed for the independent films across the world giving them a platform to launch their movie worldwide. The films are the result of the persistent efforts of dreamers, from internet celebrities to famous directors who have been working in the film industry for half a century, all of whom have never forgotten their originality and promoting the culture of their country. The Standalone Film Festival is an event unlike any other in the film industry, showing films from around the world for the public for a week so that people can contribute to the understanding and appreciation of film cultures of different nations and learn about their cultures, customs, women in the workplace, and art in other countries without traveling the world. Films from the U.S., Iran, India, China and Latin America are categorized by category. It also celebrates their films for the LGBT community.
                                </p>
                                <div className="section-detail-vision">
                                    {isVis && (
                                        <Typist cursor={{ show: false }} onTypingDone={() => setComp1(true)} avgTypingDelay={50}>
                                            <h3 className='section-detail-heading'>Vison</h3>
                                            <p>To support Independent movie makers across globe to showcase their talent.</p>
                                        </Typist>
                                    )}
                                </div>
                                <div className="section-detail-mission">
                                    {
                                        comp1 && (
                                            <>
                                                {isVis && (
                                                    <Typist cursor={{ show: false }} avgTypingDelay={50}>
                                                        <h3 className='section-detail-heading'>Mission</h3>
                                                        <p>To make the dream come true of the independent movie makers so that they can launch their movies for which they have put their entire life.</p>
                                                    </Typist>

                                                )}
                                            </>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </Visible>

            </div>
        </>
    )
}

export default About
