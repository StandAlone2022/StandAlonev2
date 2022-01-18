import { getEventCard, getEventCarousel, getEventJury } from '../services'
import {Layout,Event} from '../src/components'

const register = ({carousel,jury,card,term}) => {
    console.log("Darkseid")
    return (
        <Layout title={"Events"} description={"Events Page"}>
            <Event carousel={carousel} jury={jury} card={card} term={term} />
        </Layout>
    )
}

export default register

export async function getServerSideProps(){
    const carousel=await getEventCarousel() || []
    const jury=await getEventJury() || []
    const card=await getEventCard() || []
    
    return {
        props:{
            carousel: carousel.eventCarousels,
            jury: jury.eventJuries,
            card: card.eventCards,
            
        }
    }
}

