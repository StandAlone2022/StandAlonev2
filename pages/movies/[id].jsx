import { useRouter } from 'next/router'
import { getMovies } from '../../services'
import {Layout,MoviesDetail as Detail} from '../../src/components'
import { data } from '../../src/db/data'

const Details = ({movies}) => {
    const router=useRouter()
    const {id}=router.query

    const newData=movies.filter((d)=>id===d.category.find((d)=>d===id))
    console.log({movies,newData})
    return (
        <Layout title={`Movies`} description={`Movies Detail`}> 
            <Detail data={newData} />
        </Layout>
    )
}

export default Details

export async function getServerSideProps(){
    const movies=await getMovies() || []

    return {
        props: {
            movies: movies.movies
        }
    }
}