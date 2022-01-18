
import { useEffect, useState } from "react"
import { data } from "../../db/data"
import Grid from "./Grid"

import Modal from "./Modal";

import Aos from "aos"
import Filter from "./Filter";


const Gallery = ({gallery}) => {
    const [blur, setBlur] = useState(false)
    const [img, setImg] = useState(null)
    const [focus, setFocus] = useState(false)
    useEffect(() => {
        const gallery = document.querySelector('footer')
        if (blur) {
            gallery.classList.add('blur')
        } else {
            gallery.classList.remove('blur')
        }
        Aos.init()
        if(img!==null){
            setFocus(true)
        }else{
            setFocus(false)
        }
    }, [blur, img,focus])

    return (
        <>
            <div className="gallery" data-aos="zoom-in">
                <div className={`gallery-content ${blur ? "blur" : ""}`}>
                    <Grid data={gallery} setBlur={setBlur} setImg={setImg} img={focus} />
                </div>
                <div className={`gallery-filter ${blur ? "blur" : ""}`}>
                    <Filter setImg={setImg} gallery={gallery} />
                </div>
                <Modal img={img} setBlur={setBlur} setImg={setImg} />
            </div>

        </>
    )
}

export default Gallery
