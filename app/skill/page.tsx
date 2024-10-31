import { skills } from '@/Data';
import Image from 'next/image';
import React from 'react';

const Skill = () => {
    return (
        <div>
            <p>skill</p>
            <div className='flex flex-wrap justify-center border-3  items-center w-[500px]'>
                {
                    skills.map(item => (
                        
                        <div 
                        key={item.id} 
                        className="flex items-center space-x-1 px-4 py-1 border-2 rounded-full shadow-md min-w-fit"
                      >
                        { item.skill_name == "MongoDb" ? <Image width={12} height={16} src={item.icon_link} alt={item.skill_name} /> :  <Image width={24} height={24} src={item.icon_link} alt={item.skill_name} /> }
                        <p className="text-sm font-medium">{item.skill_name}</p>
                      </div>
                           
                       
                    ))
                }
            </div>
        </div>
    );
};

export default Skill;