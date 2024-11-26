import React from 'react'
import Image from 'next/image'
import Card from '../Components2/Card2'

const data = [
    {
        id: 0,
        img: "/image/th (6).jfif",
    },
    {
        id: 1,
        img: "/image/coding-7-1920.webp",
    },
    {
        id: 2,
        img: "/image/th (2).jfif",
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
      