"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Navbar from "../components/NavBar/Navbar";
import dynamic from "next/dynamic";
import Treasurehunt from "../components/TreasureHunt/treasureHunt";
import Timer from "@/components/Timer/timer";
import { RegisterPage } from "@/components/Register";
import Paragraph from "@/components/Event-description/Paragraph";
import Word from "@/components/Event-description/Word";
import Character from "@/components/Event-description/Character";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const words = paragraph.split(" ");

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

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Scene />
      </main>
      <Word paragraph={paragraph} />
      <Treasurehunt />
      <Timer />
    </div>
  );
}
