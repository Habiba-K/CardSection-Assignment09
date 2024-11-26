import React from 'react'
import Image from 'next/image'
import Card from '../Components2/Card2'

const data = [
    {
        id: 0,
        img: "/image/where-is-ai-used.jpg",
    },
    {
        id: 1,
        img: "/image/15c57871-d733-4fdc-8883-4a2040cd3d95.jfif",
    },
    {
        id: 2,
        img: "/image/AdobeStock_164909094-scaled.jpeg",
    },
]


const Projects2 = () => {
    let projectcard =data.map((el) => {
        return <Card 
            key={el.id}
            img = {el.img}
        />
    })
    return(
            <div className='flex flex-col lg:flex-row gap-3 mt-12 mb-10 items-center justify-center  w-full md:4/12  rounded-lg'>
                {projectcard}
            </div>
        );
      }
      
export default Projects2;
      