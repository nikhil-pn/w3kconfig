// app/page.js (or wherever your main component is)

"use client";
<<<<<<< HEAD

=======
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
>>>>>>> a268ec058a0cb550a7012011cc7d88536f8df632
import Navbar from "../components/NavBar/Navbar";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import Timer from "@/components/Timer/timer";
import Word from "@/components/Event-description/Word";

const paragraph =
  "Gm GM, listen up! This site’s got all the deets on the event—speakers, location, Bounty's, all that jazz. But, you gotta hunt for it, fam!  Happy Digging                                 First hint: All the secrets are buried deep in the console.";
>>>>>>> a268ec058a0cb550a7012011cc7d88536f8df632

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const Map = dynamic(() => import("@/components/Map/LeafletMap"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const words = paragraph.split(" ");
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 5000);
    })();
  }, []);

  console.log("/speaker");

  // Check the path to render the Timer component
  if (pathname === "/timer") {
    return (
      <div className="h-screen">
        <Timer />
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
          </AnimatePresence>
          <Scene />
        </main>
      </div>
    </>
=======
    <div className="flex flex-col min-h-screen bg-black pb-24">
      <Navbar />
      <main className="flex-grow items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Scene />
      </main>
      <Word paragraph={paragraph} />
      <div className="mt-20"></div>
    </div>
>>>>>>> a268ec058a0cb550a7012011cc7d88536f8df632
  );
}
