import {  useEffect } from "react"



const TestimmonialVideo = ({ link, iframe = false, setShow, show }) => {
    useEffect(() => {

    }, [show])
    return (
        <div className="testimonial-video">

            <div className={`home-testimonial-content-video animate__animated animate__zoomInDown`}>
                <div className="video">
                    {
                        iframe ? (
                            <iframe src={`https://www.youtube.com/embed/${link}`} frameBorder="0" allowFullScreen></iframe>
                        ) : (
                            <video src={link} autoPlay loop muted={false} controls />
                        )
                    }
                    <div className="video-cancel" onClick={() => setShow(false)}>
                        <i className="fas fa-times" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimmonialVideo
