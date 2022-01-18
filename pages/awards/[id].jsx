import { useRouter } from "next/router"
import { getAwardMovie } from "../../services"
import { Layout, Detail } from "../../src/components"


const Year = ({movie}) => {
    const router = useRouter()
    const { id } = router.query

    const newData = movie.filter((d) => id === d.awardYear.toString())

    if (id === undefined) {
        return <h1>Wait ...</h1>
    }
    console.log({movie,newData,id})
    return (
        <Layout title={`Awards-${id}`} description={`Awards-${id}`}>
            <div className="awards-detail">
                <Detail data={newData} title={"Sci-Fi"}  />
                <Detail data={newData} title={"Action/Thriller"} speed={800} />
                <Detail data={newData} title={"Crime"} speed={1000} />
                <Detail data={newData} title={"Romance"} speed={1200} />
            </div>
        </Layout>
    )
}

export default Year


export async function getServerSideProps(){
    const movie=await getAwardMovie() || []
    return {
        props:{
            movie:movie.awardMovies
        }
    }
}
