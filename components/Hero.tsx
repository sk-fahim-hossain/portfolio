import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
    return (
        <section id='hero' className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-28 left-80  h-[80vh] w-[80wh]' fill='blue' />
            </div>



            <div className="h-screen w-full bg-grid-white/[0.1]  absolute top-0 flex  justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute  pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>


            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[800px] md:max-w-[800px] lg:max-w-[800px] flex flex-col items-center justify-center'>

                    <h1 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Fluid Across Stacks. Focused on Impact</h1>
                    <TextGenerateEffect className='text-center text-[37px] md:text-4xl lg:text-6xl' words='Empowering Brands Through Exceptional Digital Experiences'></TextGenerateEffect>
                    {/* sub heading */}
                    <div className='max-w-[90%] sm:max-w-[90%] md:max-w-[500px] lg:max-w-[650px]'>
                        <p className='tracking-wider text-center mb-4 text-sm md:text-lg lg:text-2xl'>We create digital solutions that engage, inspire, and elevate your brand presence</p>

                    </div>

                    <a href="#projects">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;