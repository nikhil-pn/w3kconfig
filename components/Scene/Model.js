import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <group scale={viewport.width / 3.5}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 1, -1]} // Adjusted position for better visibility
        fontSize={isMobile ? 0.3 : 0.5}
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
          position={[0, -1, -1]} // Adjusted position to prevent overlap
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={4} // Limit width to prevent overflow
        >
          Message from the Developers: We have designed this website with many Easter eggs and
          treasure hunts that are not supported on mobile phones. Please use a
          laptop to explore the website and win the bounties.
        </Text>
      )}
    </group>
  );
}
