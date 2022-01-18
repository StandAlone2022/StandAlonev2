import React from 'react'
import { Carousel } from './subComponents'
import { data } from '../../db/data'

const Movies = ({movies}) => {
    

    return (
        <div className='movies'>
            <div className="movies-carousel">
                <Carousel data={movies} heading={"Top Rated"} link={"toprated"}  />
            </div>

            <div className="movies-carousel1">
                <Carousel data={movies} heading={"HollyWood"} speed={800} link={"hollywood"} />
            </div>

            <div className="movies-carousel2">
                <Carousel data={movies} heading={"BollyWood"} speed={1000} link={"bollywood"} />
            </div>
        </div>
    )
}

export default Movies
