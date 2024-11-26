import React from 'react'
import Image from 'next/image'
import Card from './Card1'
const data = [
    {
        id: 0,
        img: "/image/shutterstock_535124956-scaled.jpg",
    },
    {
        id: 1,
        img: "/image/coding-and-programming-computer-science-and-it.jpg",
    },
]


const Projects1 = () => {
    let projectcard =data.map((el) => {
        return <Card 
            key={el.id}
            img = {el.img}
        />
    })
    return(
            <div className='flex flex-col items-center lg:flex-row  gap-3 mt-10 mb-5 justify-center sm:6/12  rounded-lg '>
                {projectcard}
            </div>
        );
      }
      
export default Projects1;
      