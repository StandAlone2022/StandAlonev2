import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { data } from '../../db/data'

const Filter = ({setImg,gallery}) => {
    const [num, setNum] = useState(null)
    const [filterData, setFilterData] = useState(null)
    const category=[
        {
            id: 0,
            name: 'All',
            
        },
        {
            id: 1,
            name: 'News',
        },
    ]
    const onClickHandler=(d,i)=>{
        setNum(i)
        if(i===0){
            setFilterData(null)
        }else{
            setFilterData(d.name)
        }
    }
    
    const newData= filterData ? gallery.filter((d)=> filterData === d.category.find((d)=> d===filterData)) : gallery
    useEffect(()=>{
        
    },[num,filterData,newData])
    console.log({newData,gallery})
    return (
        <>
            <div className="gallery-filter-nav">
                {
                    category.map((d,i) => (
                        <h4 key={i} onClick={()=>onClickHandler(d,i)} className={i===num ? "add" : "remove" } >
                            {d.name}
                        </h4>
                    ))
                }
            </div>
            <div className="gallery-filter-content">
                {newData.map((d)=>(
                    <Image src={d.imageUrl} alt={d.title} width={300} height={300} objectFit='cover' key={d.id    } data-aos="zoom-in"  />
                ))}
            </div>
        </>
    )
}

export default Filter
