import React from 'react';
import Image from 'next/image';
interface propsType{    
    img:string,
}
const Card2 : React.FC<propsType>= ({ img}) => {
    return (
            <div className='rounded-lg object-cover ease-in duration-500 border border-gray shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <Image 
                    src={img} 
                    width={400} 
                    height={400} 
                    alt="img" 
                    className='rounded-lg object-fill shadow-2xl shadow-black'
                />
            </div>
    )
}
export default Card2;