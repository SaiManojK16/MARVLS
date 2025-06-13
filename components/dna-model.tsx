"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import * as THREE from "three"

function DNA() {
  const holderRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  // Colors
  const blue = 0x84D0F0
  const yellow = 0xFED162
  const purple = 0x651E59

  // Create DNA structure
  const dna = new THREE.Group()
  const holder = new THREE.Group()

  // Create geometries
  const tubeGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6, 32)
  const ballGeometry = new THREE.SphereGeometry(0.8, 32, 32)
  const blueMaterial = new THREE.MeshBasicMaterial({ color: blue })
  const yellowMaterial = new THREE.MeshBasicMaterial({ color: yellow })
  const purpleMaterial = new THREE.MeshBasicMaterial({ color: purple })

  // Build DNA structure
  for (let i = 0; i <= 40; i++) {
    const blueTube = new THREE.Mesh(tubeGeometry, blueMaterial)
    blueTube.rotation.z = 90 * Math.PI / 180
    blueTube.position.x = -3

    const yellowTube = new THREE.Mesh(tubeGeometry, yellowMaterial)
    yellowTube.rotation.z = 90 * Math.PI / 180
    yellowTube.position.x = 3

    const ballRight = new THREE.Mesh(ballGeometry, purpleMaterial)
    ballRight.position.x = 6

    const ballLeft = new THREE.Mesh(ballGeometry, purpleMaterial)
    ballLeft.position.x = -6

    const row = new THREE.Group()
    row.add(blueTube)
    row.add(yellowTube)
    row.add(ballRight)
    row.add(ballLeft)

    row.position.y = i * 2
    row.rotation.y = 30 * i * Math.PI / 180

    dna.add(row)
  }

  dna.position.y = -40
  holder.add(dna)

  // Animation
  useFrame(() => {
    if (holderRef.current) {
      holderRef.current.rotation.x += 0.01
      holderRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={holderRef}>
      <primitive object={holder} />
    </group>
  )
}

export default function DNAModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <color attach="background" args={["#DABDD8"]} />
        <Suspense fallback={null}>
          <DNA />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.5} />
      </Canvas>
    </div>
  )
} 