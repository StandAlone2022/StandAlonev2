import Image from "next/image"

import { useEffect } from "react"

const Modal = ({ img, setBlur, setImg }) => {

    if (img === null) {
        return null
    }
    return (
        <div>
            <div className="gallery-modal" data-aos="zoom-in">
                <Image src={img} alt="" width={1920} height={1080} />
                <div className="button">
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="cancel-btn" onClick={() => {
                    setBlur(false)
                    setImg(null)
                }}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}

export default Modal
