import React from 'react';
import Image from 'next/image';
interface propsType{    
    img:string,
}
const Card1 : React.FC<propsType>= ({ img}) => {
    return (
            <div className='rounded-lg object-cover ease-in duration-500  '>
                <Image 
                    src={img} 
                    width={600} 
                    height={450} 
                    alt="img" 
                    className='rounded-lg object-fill shadow-2xl shadow-black w-[800px] sm:w-[600px] h-[450px]'
                />
            </div>
    )
}
export default Card1;