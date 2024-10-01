import { navItems } from "@/Data";
import { Approach } from "@/components/Approch";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/ui/Footer";
import MovingBanner from "@/components/ui/MovingBanner";
import Link from "next/link";



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
          <p className="mr-9"><Link href='/experimental'>Discover <span className="text-cyan-700">More</span></Link></p>
        </div>
        <Approach />
        <Footer />

      </div>
    </main>
  );
}
