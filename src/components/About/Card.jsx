import Image from "next/image"

const Card = ({ img,name,role,about,id }) => {
    return (
        <div className="card" data-aos="zoom-in" key={id} >
            <div className="card__content">
                <div className="card__front" style={{ backgroundImage: `url(${img})` }}>
                    <h4 className="card__title">{name}</h4>
                    <p className="card__subtitle">{role}</p>
                </div>
                <div className="card__back">
                    <div className="card__body">
                        <p>{about}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
