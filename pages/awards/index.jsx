import { getAwardCarousel, getAwardMovie } from "../../services"
import { Layout,Awards } from "../../src/components"

const awards = ({movie,carousel}) => {
    console.log({carousel})
    return (
        <Layout title={"Awards"} description={"Awards"}>
            <Awards movie={movie} carousel={carousel} />
        </Layout>
    )
}

export default awards


export async function getServerSideProps(){
    const movie=await getAwardMovie() || []
    const carousel=await getAwardCarousel() || []
    return {
        props:{
            movie:movie.awardMovies,
            carousel: carousel.awardCarousels
        }
    }
}