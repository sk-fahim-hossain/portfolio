"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('sheikhfahimhossain1@gmail.com')
    setCopied(true)
  }


  const skills = ['React.js', 'Next.js', 'ExpressJs', 'MongoDb', 'Redux', 'React Native Expo']

  const chips = skills.map((item) => (
    <div className=" p-5 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
      {item}
    </div>
  ))


   
  return (
    <div
      className={cn(
        "relative row-span-1 overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >

      <div className={`${id === 6 && 'flex justify-center items-center'} h-full'  `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(className, `object-cover object-center absolute ${id === 1 && 'h-full w-full opacity-60'} `)}
            />
          )}
        </div>


        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full h-full opacity-70'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center absolute"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex justify-center items-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}




        {id === 3 && (
          <div className="flex gap-1 lg:gap-3 w-fit absolute -right-5">
            <div className="flex flex-col gap-3 lg:gap-8 rotate-12">

              {/* <span className="py-4 lg:py-4 lg:px-3 text-sx px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center " /> */}




              <Marquee direction="up" autoFill className="overflow-y-hidden" children={chips}>
              </Marquee>








              {/* <div className="flex flex-col gap-3 lg:gap-8"> */}
              {/* {

                  ['ExpressJs', 'MongoDb', 'Redux'].map
                    ((item) => (
                      <span key={item} className="w-10 py-2 text-gray-400 lg:py-4 lg:px-3 text-sx px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>

                    ))
                } */}
              {/* <span className="py-3 lg:py-4 lg:px-3 text-sx px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]" /> */}
              {/* </div> */}
            </div>
          </div>
        )}




        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
            {id === 6 && (
              <div className="">
                <div className="absolute z-70 ml-[80px]">
                  <MagicButton
                    title={copied ? "Email copied" : "Copy my email"}
                    icon={<IoCopyOutline />}
                    position="right"
                    otherClasses="bg-[#161a31] "
                    handleClick={handleCopy}
                  />
                </div>
              </div>

            )}
          </div>
        </div>
      </div>
    </div >
  );
};
