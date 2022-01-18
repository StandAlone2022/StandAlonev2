import { useState } from "react"
import { HeadingAOS, Visible } from "../hooks"
import Typist from "react-typist"

const MidVid = ({info}) => {
    const [isVis, setIsVis] = useState(false)
    const data=info[0]
    return (
        <>
            <HeadingAOS title={"midvid"}>Standalone</HeadingAOS>
            <Visible setIsVis={setIsVis}>
                <div className="home-midvid-video">
                    
                    <video src={data.videourl} loop autoPlay muted />
                    <div className="home-midvid-video-detail">
                        <Typist avgTypingDelay={65} cursor={{ show: false }}>
                            <h1>{data.title}</h1>
                            <p>{data.info}</p>
                        </Typist>
                    </div>
                </div>
            </Visible>
        </>
    )
}

export default MidVid
