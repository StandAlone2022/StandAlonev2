import { getGallery } from "../../services"
import { Layout,Gallery } from "../../src/components"

const index = ({gallery}) => {
    return (
        <Layout title={"Gallery"} description={"Gallery"}>
            <Gallery gallery={gallery} />
        </Layout>
    )
}

export default index

export async function getServerSideProps(){
    const gallery=await getGallery() || []
    return {
        props:{
            gallery: gallery.galleries
        }
    }
}