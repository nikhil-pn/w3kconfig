import React, { useState, useEffect, useRef } from 'react';
import { useGLTF, Text, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import JSConfetti from 'js-confetti';

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF('/medias/shards.glb');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Create a new instance of JSConfetti every time the component renders
  useEffect(() => {
    const newJsConfetti = new JSConfetti();
    newJsConfetti.addConfetti(); // Trigger confetti on every reload
  }, []);

  useEffect(() => {
    let timer;
    if (timeLeft.days === undefined) {
      // Check event start
      // NO CONFETTI HERE
    } else {
      timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
        if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
          // Trigger confetti when time runs out
          const newJsConfetti = new JSConfetti();
          newJsConfetti.addConfetti();
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);
  function calculateTimeLeft() {
    const eventDate = new Date("2024-08-04T13:58:00"); // 10:00 AM on Aug 17, 2024
    const now = new Date();
    const difference = eventDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  return (
    <group scale={viewport.width / 1.5} >
      {
        nodes.Scene.children.map( (mesh, i) => {
          return <Mesh data={mesh} key={i}/>
        })
      }
      <Font timeLeft={timeLeft} />
    </group>
  )
}

function Font({ timeLeft }) {
  const src = '/fonts/PPNeueMontreal-Bold.otf'
  const textOption = {
    color: "white",
    anchorX: "center",
    anchorY: "middle"
  }

  const timerText = timeLeft.days !== undefined
    ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
    : "Event Started!";

  return (
    <group>
      <Text font={src} position={[0, 0, -.1]} fontSize={0.1} {...textOption}>
        {timerText}
      </Text>
    </group>
  )
}

function Mesh({data}) {
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
  )
}