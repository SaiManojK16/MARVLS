"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { Suspense } from "react"
import { Mesh, Group, Vector3 } from "three"

type Position = [number, number, number]

interface PlanetProps {
  position: Position
  size: number
  color: string
  speed: number
  orbitRadius: number
  name?: string
  textColor?: string
}

function Planet({ position = [0, 0, 0] as Position, size, color, speed, orbitRadius, name, textColor = "#ffffff" }: PlanetProps) {
  const ref = useRef<Mesh>(null)
  const orbitRef = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed

    // Update planet position in orbit
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * orbitRadius
      ref.current.position.z = Math.cos(t) * orbitRadius
    }

    // Rotate planet
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }

    // Rotate orbit
    if (orbitRef.current) {
      orbitRef.current.rotation.y += 0.001
    }
  })

  return (
    <group>
      {/* Orbit path */}
      <mesh ref={orbitRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </mesh>

      {/* Planet */}
      <mesh ref={ref} position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />

        {/* Planet name */}
        {name && (
          <Text position={[0, size + 0.2, 0]} fontSize={0.2} color={textColor} anchorX="center" anchorY="middle">
            {name}
          </Text>
        )}
      </mesh>
    </group>
  )
}

function Sun() {
  const sunRef = useRef<Mesh>(null)

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={0.6} />
    </mesh>
  )
}

// Update the text color to ensure visibility in both light and dark modes
function SolarSystemModel() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />

      {/* Sun */}
      <Sun />

      {/* Planets */}
      <Planet
        position={[0, 0, 0]}
        size={0.2}
        color="#A9A9A9"
        speed={0.5}
        orbitRadius={2}
        name="Mercury"
        textColor="#ffffff"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.3}
        color="#E7CDCD"
        speed={0.4}
        orbitRadius={3}
        name="Venus"
        textColor="#ffffff"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.4}
        color="#4169E1"
        speed={0.3}
        orbitRadius={4}
        name="Earth"
        textColor="#ffffff"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.25}
        color="#CD5C5C"
        speed={0.25}
        orbitRadius={5}
        name="Mars"
        textColor="#ffffff"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.7}
        color="#DAA06D"
        speed={0.2}
        orbitRadius={6.5}
        name="Jupiter"
        textColor="#ffffff"
      />
      <Planet
        position={[0, 0, 0]}
        size={0.6}
        color="#F4F4F4"
        speed={0.15}
        orbitRadius={8}
        name="Saturn"
        textColor="#ffffff"
      />

      {/* Text label */}
      <Text
        position={[0, -3, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        Solar System Model
      </Text>

      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function SolarSystem() {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <Canvas>
        <Suspense fallback={null}>
          <SolarSystemModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
