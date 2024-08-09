import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMediaQuery } from 'react-responsive';

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.07,
    backside: false,
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <group scale={viewport.width / 3.5}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={isMobile ? 0.3 : 0.5} // Adjust font size based on screen size
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        W3K CONFERENCE 2024
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      {isMobile && (
        <Text
          position={[0, -1, -1]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          For better view, use desktop
        </Text>
      )}
    </group>
  );
}
