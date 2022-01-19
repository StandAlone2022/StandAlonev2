import {Layout,Home} from '../src/components'
import { getGallery, getHomeEvent, getHomeIntro ,getHomeLowerVid,getMovies, Testimonial} from '../services'

const index = ({intro,movie,info,testimonial,gallery,event}) => {
    console.log({event})
    return (
        <Layout title={"Home"} description={"Stanalone Home"}>
            <Home intro={intro} movies={movie} info={info} testimonial={testimonial} gallery={gallery} event={event} />
        </Layout>
    )
}

export default index


export async function getServerSideProps(){
    const intro=await getHomeIntro() || [];
    const movie=await getMovies() || [];
    const info=await getHomeLowerVid() || [];
    const testimonial=await Testimonial() || [];
    const gallery=await getGallery() || []
    const event=await getHomeEvent() || []
    return {
        props:{
            intro:intro.homeIntros,
            movie:movie.movies,
            info: info.homeLowervideos,
            testimonial: testimonial.homeTestimonials,
            gallery: gallery.galleries,
            event: event.homeEvents
        }
    }
}