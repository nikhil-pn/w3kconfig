import React, { useState, useEffect, useRef } from "react";
import {
  useGLTF,
  Text,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import JSConfetti from "js-confetti";
import { IconBrandX } from "@tabler/icons-react";
import TwitterX from "./twitter-icon";

const jsConfetti = new JSConfetti();

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/medias/shards.glb");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const jsConfettiRef = useRef(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  useEffect(() => {
    let timer;

    if (timeLeft.days === undefined) {
      // Check event start
      if (jsConfettiRef.current) {
        jsConfettiRef.current.addConfetti(); // Trigger confetti
      }
    } else {
      timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
        if (newTimeLeft.days === undefined && jsConfettiRef.current) {
          jsConfettiRef.current.addConfetti(); // Trigger confetti when time runs out
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const eventDate = new Date("2024-08-17T10:00:00"); // 10:00 AM on Aug 17, 2024
    const now = new Date();
    const difference = eventDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <group scale={viewport.width / 2}>
      {nodes.Scene.children.map((mesh, i) => {
        return <Mesh data={mesh} key={i} />;
      })}
      <Font timeLeft={timeLeft} />
    </group>
  );
}

function Font({ timeLeft }) {
  const src = "/fonts/PPNeueMontreal-Bold.otf";
  const textOption = {
    color: "white",
    anchorX: "center",
    anchorY: "middle",
  };

  const timerText =
    timeLeft.days !== undefined
      ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
      : "Event is Live!";

  return (
    <group>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.1} {...textOption}>
        {timerText}
      </Text>
      <Text
        font={src}
        position={[0, -0.1, -0.1]}
        fontSize={0.03}
        {...textOption}
      >
        Follow us on
      </Text>
      <Mesh font={src} position={[0, 0, 0]} fontSize={0.3}>
        <TwitterX />
      </Mesh>
    </group>
  );
}

function Mesh({ data }) {
  // Define default material props
  const defaultMaterialProps = {
    thickness: 0.275,
    ior: 1.8,
    chromaticAberration: 0.75,
    resolution: 300,
  };

  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          {...defaultMaterialProps} // Apply default props
        />
      </mesh>
    </Float>
  );
}
