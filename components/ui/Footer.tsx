"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/Data";
import MagicButton from "./MagicButton";
import { BackgroundBeams } from "./BackgroundBeams";
import { TypewriterEffect } from "./TypewritterEffect";
import Link from "next/link";
import { LiaFileDownloadSolid } from "react-icons/lia";


const Footer = () => {
  
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "take",
    },
    {
      text: "your",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "digital",
    },
    {
      text: "presence",
    },
    {
      text: "to",
    },
    {
      text: "the",
    },
    {
      text: "next",
    },
    {
      text: "level?",
    },

  ];




  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Fahim Hossain Resume.pdf';
    link.download = 'Fahim Hossain Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  
  // Using the link
  
  const handleMail = () =>{
    interface WindowOpenType {
      type: 'mailto' | 'http' | 'https';
      link: string;
    }
    
    const emailLink: WindowOpenType = {
      type: 'https',
      link: "https://www.linkedin.com/in/dev-fahim/"
    };


    window.open(`${emailLink.link}`);
    // window.open = (mailUrl)
  }
    

  const stringYear = new Date()
  const currentYear = stringYear.getFullYear()
  return (
    <footer className="w-full  p-16 relative" id="contact">


      <div className="flex flex-col items-center">
        <TypewriterEffect words={words}></TypewriterEffect>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>


        <div className="flex flex-col items-center justify-center">
          <div onClick={handleMail} className="z-50">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>

         
          <div onClick={handleDownloadResume} className="z-40">
            <MagicButton
              title="Download Resume"
              icon={<LiaFileDownloadSolid />}
              position="right"
            />
          </div>
        </div>






      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center sm:mb-4">
        <p className="md:text-base text-sm md:font-normal font-light mb-[30px]">
           {currentYear} developed by <span className="bg-black p-1">Fahim Hossain</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6 z-30">
          {socialMedia.map((info, index) => (
            <Link key={index} href={info.link} target="_blank" title={index === 1 ? 'Currently I am not on Twitter' : ''}>

              <div
                key={info.id}
                className=" w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                {index === 1 ? <div className="" title="Currently I am not on twitter"></div> : null}
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>

            </Link>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  );
};

export default Footer;