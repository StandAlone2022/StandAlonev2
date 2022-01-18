import { getMovies } from '../../services'
import {Layout, Movies} from '../../src/components'

const index = ({movies}) => {
    console.log({movies})
    return (
        <Layout title={"Movies"} description={"Movies Info"}>
            <Movies movies={movies} />
        </Layout>
    )
}

export default index


export async function getServerSideProps(){
    const movies=await getMovies() || []

    return {
        props:{
            movies: movies.movies
        }
    }
}