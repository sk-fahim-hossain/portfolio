"use client"
import { navItems } from "@/Data";
import { Approach } from "@/components/Approch";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/ui/Footer";
import MovingBanner from "@/components/ui/MovingBanner";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { motion } from "framer-motion"
import Skills from "@/components/Skills";



export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero />
        <div>
          <MovingBanner />
        </div>
        <Grid />
        <RecentProjects />


        {/* <InfiniteMovingCardsDemo/> */}
        <div className="flex justify-end">
          <Link className="flex items-center" href='/experimental'>
            <p className="mr-9 text-2xl flex gap-1">Discover  <span className="text-cyan-700">More</span></p>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{
                duration: 0.5, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut", 
              }}
            >
              <FaAnglesRight className="size-7" />
            </motion.div>
          </Link>
        </div>
        <Skills/>
        <Approach />
        <Footer />

      </div>
    </main>
  );
}
