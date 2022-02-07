import {Layout,Home} from '../src/components'
import { getGallery, getHomeAbout, getHomeEvent, getHomeIntro ,getHomeLowerVid,getMovies, Testimonial} from '../services'

const index = ({intro,movie,info,testimonial,gallery,event,about}) => {
    console.log({about})
    return (
        <Layout title={"Home"} description={"Stanalone Home"}>
            <Home intro={intro} movies={movie} info={info} testimonial={testimonial} gallery={gallery} event={event} about={about[0]} />
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
    const Abouts=await getHomeAbout() || []
    return {
        props:{
            intro:intro.homeIntros,
            movie:movie.movies,
            info: info.homeLowervideos,
            testimonial: testimonial.homeTestimonials,
            gallery: gallery.galleries,
            event: event.homeEvents,
            about: Abouts.homeAbouts
        }
    }
}