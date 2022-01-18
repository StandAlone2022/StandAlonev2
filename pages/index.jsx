import {Layout,Home} from '../src/components'
import { getHomeIntro ,getHomeLowerVid,getMovies, Testimonial} from '../services'

const index = ({intro,movie,info,testimonial}) => {
    console.log({testimonial})
    return (
        <Layout title={"Home"} description={"Stanalone Home"}>
            <Home intro={intro} movies={movie} info={info} testimonial={testimonial} />
        </Layout>
    )
}

export default index


export async function getServerSideProps(){
    const intro=await getHomeIntro() || [];
    const movie=await getMovies() || [];
    const info=await getHomeLowerVid() || [];
    const testimonial=await Testimonial() || [];
    return {
        props:{
            intro:intro.homeIntros,
            movie:movie.movies,
            info: info.homeLowervideos,
            testimonial: testimonial.homeTestimonials
        }
    }
}