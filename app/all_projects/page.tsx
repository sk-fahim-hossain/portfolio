"use client"
import { motion } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa6';
import { PinContainer } from '@/components/ui/3d-pin';
import { projects } from '@/Data';




const AllProjects = () => {


    const stackSection = ["Reactjs", "nextjs", "express", "Webflow"]




    return (
        <div className='bg-[#000319] cursor' >

            <div className="md:pt-[100px] lg:pt-[100px]">
                <section id='projects' className="py-20">
                    <h1 className="heading text-white">
                        Innovation Through {" "}
                        <span className="text-purple">Passionated Creation</span>
                    </h1>


                    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            animate={{ y: 40, opacity: 1 }}
                            className='flex-shrink w-full'>
                            <h3 className='text-7xl text-white text-center ruthie -rotate-3'><span className="before:block  pointer-events-none before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-400 relative inline-block">
                                <span className="relative text-white ">Custome Coded</span>
                            </span></h3>
                        </motion.div>
                        {projects.filter(item => item.stack.includes(stackSection[0])).map((item, index) => (
                            <div
                                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                                key={item.id}
                            >
                                <PinContainer
                                    title={item.link}
                                    href={item.link}
                                >
                                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                        <div
                                            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                            style={{ backgroundColor: "#000319" }}
                                        >
                                            <img src="/bg.png" alt="bgimg" />
                                        </div>
                                        <img
                                            src={item.img}
                                            alt="cover"
                                            className="z-10 absolute bottom-0"
                                        />
                                    </div>

                                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                        {item.title}
                                    </h1>

                                    <p
                                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                        style={{
                                            color: "#BEC1DD",
                                            margin: "1vh 0",
                                        }}
                                    >
                                        {item.des}
                                    </p>

                                    <div className="flex items-center justify-between mt-7 mb-3">
                                        <div className="flex items-center">
                                            {item.iconLists.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{
                                                        transform: `translateX(-${5 * index + 2}px)`,
                                                    }}
                                                >
                                                    <img src={icon} alt="icon5" className="p-2" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                                Check Live Site
                                            </p>
                                            <FaLocationArrow className="ms-3" color="#CBACF9" />
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                        <div className='flex-shrink w-full'>
                            <motion.div
                                initial={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                animate={{ y: 0, opacity: 1 }}
                                className='flex-shrink w-full mb-[60px]'>
                                <h3 className='text-7xl text-purple text-center ruthie -rotate-3'><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                                    <span className="relative text-white">CMS</span>
                                </span></h3>
                            </motion.div>
                            <motion.div
                                initial={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                animate={{ y: 0, opacity: 1 }}
                                className='flex-shrink w-full'>
                                <h3 className='text-7xl text-purple text-center opensans rotate-0'><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block">
                                    <span className="relative text-white font-bold">Webflow</span>
                                </span></h3>
                            </motion.div>


                        </div>


                        {projects.filter(item => item.stack.includes(stackSection[3])).map((item, index) => (
                            <div
                                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                                key={item.id}
                            >
                                <PinContainer
                                    title={item.link}
                                    href={item.link}
                                >
                                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                        <div
                                            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                            style={{ backgroundColor: "#13162D" }}
                                        >
                                            <img src="/bg.png" alt="bgimg" />
                                        </div>
                                        <img
                                            src={item.img}
                                            alt="cover"
                                            className="z-10 absolute bottom-0"
                                        />
                                    </div>

                                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                        {item.title}
                                    </h1>

                                    <p
                                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                        style={{
                                            color: "#BEC1DD",
                                            margin: "1vh 0",
                                        }}
                                    >
                                        {item.des}
                                    </p>

                                    <div className="flex items-center justify-between mt-7 mb-3">
                                        <div className="flex items-center">
                                            {item.iconLists.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{
                                                        transform: `translateX(-${5 * index + 2}px)`,
                                                    }}
                                                >
                                                    <img src={icon} alt="icon5" className="p-2" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                                Check Live Site
                                            </p>
                                            <FaLocationArrow className="ms-3" color="#CBACF9" />
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllProjects;