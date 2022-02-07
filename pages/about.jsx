import { Layout,About as Abouts } from "../src/components"
import { getTeam,getAbout } from "../services"

const About = ({team,about}) => {
    console.log({about})
    return (
        <Layout title={"About"} description={"About Page"} >
            <Abouts team={team} about={about[0]} />
        </Layout>
    )
}

export default About

export async function getServerSideProps(){
    const team=await getTeam() || []
    const about=await getAbout() || []
    return {
        props:{
            team:team.teams,
            about: about.abouts
        }
    }
}