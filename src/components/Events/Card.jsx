import Image from "next/image"



const Card = ({link,aos,title,city,date,desc,redirect}) => {
    
    return (
        <div className="item-container" data-aos={aos ? aos : "zoom-in"}>
            <div className="img-container">
                <Image src={link} width={600} height={770} objectFit="contain" alt="Event image" />
            </div>
            <div className="body-container" >
                <div className="overlay" />
                <div className="event-info">
                    <p className="title">{title}</p>
                    <div className="separator" />
                    <p className="info">{city}</p>
                    {/* <p className="price">29$</p> */}
                    <div className="additional-info">
                        {/* <p className="info">
                            <i className="fas fa-map-marker-alt" />
                            {add}
                        </p> */}
                        <p className="info">
                            <i className="far fa-calendar-alt" />
                            {date}
                        </p>
                        <p className="info description">
                            {desc}
                        </p>
                    </div>
                </div>
                <button className="action">
                    <a href={redirect}>Visit</a>
                </button>
            </div>
        </div> 
    )
}

export default Card
