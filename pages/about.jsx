import { Layout,About as Abouts } from "../src/components"
import { getTeam } from "../services"

const About = ({team}) => {
    console.log({team})
    return (
        <Layout title={"About"} description={"About Page"} >
            <Abouts team={team} />
        </Layout>
    )
}

export default About

export async function getServerSideProps(){
    const team=await getTeam() || []
    
    return {
        props:{
            team:team.teams
        }
    }
}