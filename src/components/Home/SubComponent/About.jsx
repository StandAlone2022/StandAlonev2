import React, { useEffect, useState } from 'react'
import Typist from 'react-typist'
import { HeadingAOS, Visible } from "../hooks"

const About = ({about}) => {
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
                                <img src={about.imageUrl} alt="" data-aos="zoom-out-down" />
                            </div>
                            <div className="section-detail">
                                <p>
                                    {about.info}
                                </p>
                                {/* <div className="section-detail-vision">
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
                                </div> */}
                            </div>
                        </div>
                    </div>

                </Visible>

            </div>
        </>
    )
}

export default About
