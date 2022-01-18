import Aos from "aos"
import { useEffect } from "react"

const HeadingAOS = ({ children, title }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className={`home-${title}-heading`}>
            <h1 data-aos="fade-up" data-aos-duration="2000">
                {children}
            </h1>
        </div>
    )
}

export default HeadingAOS
