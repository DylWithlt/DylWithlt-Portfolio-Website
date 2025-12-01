"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

// Animated Stars Component
function AnimatedStars({ speed = 1, rotationSpeed = 0.1 }) {
  const starsRef = useRef();

  useFrame((state, delta) => {
    // Rotate stars for a spiral/flowing effect
    if (starsRef.current) {
      starsRef.current.rotation.x += delta * rotationSpeed * 0.1;
      starsRef.current.rotation.y += delta * rotationSpeed * 0.15;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000} // Increased count for denser stars
      factor={4}
      saturation={0}
      fade
      speed={speed}
    />
  );
}

export function MagicalBackground({
  intensity = 1,
  speed = 1,
  colorScheme = "default",
  interactive = true,
  children,
}) {
  return (
    <div
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <color attach="background" args={["#000010"]} />
        <ambientLight intensity={0.3} />
        <pointLight
          position={[10, 10, 10]}
          intensity={intensity}
          color="#ff6b9d"
        />

        {/* Use animated stars instead */}
        <AnimatedStars speed={speed} rotationSpeed={0.5} />

        {interactive && <OrbitControls enableZoom={false} />}

        {/* Optional: Animate the cube too */}
        {/* <AnimatedCube /> */}
      </Canvas>

      {/* Content overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Animated cube component
function AnimatedCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00a8ff"
        emissive="#00a8ff"
        emissiveIntensity={0.2}
        wireframe
      />
    </mesh>
  );
}
