"use client"
import { skills } from '@/Data';
import Image from 'next/image';
import React, {  useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
const Skills = () => {
    const constraintsRef = useRef(null);

    const [isReload, setIsReload] = useState(1)
   
    const reloadHandle = ()=>{
        setIsReload(isReload + 1)
        console.log('click')
    }
    
    // useEffect(()=>{
    //     const el = constraintsRef.current
    //     el.
    // },[isReload ])
    return (
        <div  className='mx-auto py-20'>
            <h1 className="heading">
                My{" "}
                <span className="text-purple">Skills</span>
            </h1>

            <motion.div ref={constraintsRef} className='flex gap-4 flex-wrap justify-center border-3  items-center w-full mx-auto mt-8'>
                {  
                    skills?.map(item => (
                        <motion.div
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0.2}
                            dragPropagation 
                            key={item.id}
                            className="flex cursor-move items-center space-x-1 px-4 py-1 border-2 rounded-full shadow-md min-w-fit"
                        >
                            {item.skill_name == "MongoDb" ? <Image width={12} height={16} src={item.icon_link} alt={item.skill_name} /> : <Image width={24} height={24} src={item.icon_link} alt={item.skill_name} />}
                            <p className="text-md font-medium">{item.skill_name}</p>
                        </motion.div>
                    ))
                }
            </motion.div>

            {/* <div><small onClick={reloadHandle}  className="cursor-pointer text-center space-x-1 px-4 py-1 border-2 rounded-full shadow-md min-w-fit">Reset</small></div> */}
        </div>
    );
};

export default Skills;