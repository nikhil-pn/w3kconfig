"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/NavBar/Navbar";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Word from "@/components/Event-description/Word";

const Timer = dynamic(() => import("@/components/Timer/timer"), {
  ssr: false,
});
const paragraph =
  "Gm GM, listen up! This site’s got all the deets on the event—speakers, location, Bounty's, all that jazz. But, you gotta hunt for it, fam!  Happy Digging                                 First hint: All the secrets are buried deep in the console.";

const Scene = dynamic(() => import("@/components/Scene/Index"), {
  ssr: false,
});
const LeafletMap = dynamic(() => import("../components/Map/LeafletMap"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  const words = paragraph.split(" ");
  const pathname = usePathname();
=======
  const [showMap, setShowMap] = useState(false);
>>>>>>> e272af3968336c1402b4911e26506cbf4b2674c2

  useEffect(() => {
    let locomotiveScroll;
    
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
      
      setTimeout(() => {
        setIsLoading(false);
<<<<<<< HEAD
        if (typeof document !== 'undefined') {
          document.body.style.cursor = "default";
        }
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
=======
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
         setShowMap(true);
>>>>>>> e272af3968336c1402b4911e26506cbf4b2674c2
      }, 5000);
    })();
  
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []); 

  let visible = true;

  setInterval(() => {
    if (visible) {
      console.clear();
    } else {
      console.log(
        "%c /speaker",
        "font-weight: bold; font-size: 20px; color: green;"
      );
    }
    visible = !visible;
  }, 500); // Adjust the interval time in milliseconds (500ms = 0.5 seconds)

  // Check the path to render the Timer component
  if (pathname === "/timer") {
    return (
      <div className="h-screen">
        <Timer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black pb-24">
      <Navbar />
      <main className="flex-grow items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        {/*<Scene />*/}
        {showMap && <LeafletMap />}
      </main>
      <Word paragraph={paragraph} />
      <div className="mt-20"></div>
    </div>
  );
}
