"use client"

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils";
import Spaceloader from "../../components/spaceloader/Spaceloader";


const BlackHole = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black', height: '100vh' }} className="">
      {isLoading && <Spaceloader />}
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh", background: "black" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle handleLoading={handleLoading} />
      </Canvas>

      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontWeight: 'medium',
        fontSize: '2rem',
        '@media (minWidth: 768px)': {
          fontSize: '5rem'
        }
      }}>
        WEB3K
      </h1>
    </div>
  );
};

const PointCircle = ({ handleLoading }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }

    // loading delay (adjust as needed)
    if (clock.getElapsedTime() > 2 && !loaded) {
      setLoaded(true);
      handleLoading(false);
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default BlackHole;
