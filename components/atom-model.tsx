"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import { Mesh, Group, TubeGeometry, CatmullRomCurve3, Vector3 } from "three"

function Atom() {
  const nucleusRef = useRef<Mesh>(null)
  const electron1Ref = useRef<Mesh>(null)
  const electron2Ref = useRef<Mesh>(null)
  const electron3Ref = useRef<Mesh>(null)

  // Create electron paths
  const createPathCurve = (radius: number, segments: number, orbitType: 'diagonal1' | 'diagonal2' | 'vertical') => {
    const points = []
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2
      let x, y, z
      
      switch (orbitType) {
        case 'diagonal1':
          // First diagonal orbit - matches electron1 movement
          x = Math.sin(theta) * -radius
          y = Math.sin(theta) * radius
          z = Math.cos(theta) * radius
          break
        case 'diagonal2':
          // Second diagonal orbit - matches electron2 movement
          x = Math.cos(theta) * radius
          y = Math.cos(theta) * radius
          z = Math.sin(theta) * radius
          break
        case 'vertical':
          // Vertical orbit - matches electron3 movement
          x = Math.sin(theta) * radius
          y = Math.cos(theta) * radius
          z = 0
          break
      }
      
      points.push(new Vector3(x, y, z))
    }
    return new CatmullRomCurve3(points)
  }

  // Create path curves for all three electrons
  const path1Curve = createPathCurve(150, 100, 'diagonal1') // First diagonal orbit
  const path2Curve = createPathCurve(150, 100, 'diagonal2') // Second diagonal orbit
  const path3Curve = createPathCurve(150, 100, 'vertical') // Vertical orbit

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Rotate nucleus
    if (nucleusRef.current) {
      nucleusRef.current.rotation.y += 0.01
    }

    // Orbit electrons
    if (electron1Ref.current) {
      // Path 1: First diagonal orbit
      const angle = t
      electron1Ref.current.position.x = Math.sin(angle) * -150
      electron1Ref.current.position.y = Math.sin(angle) * 150
      electron1Ref.current.position.z = Math.cos(angle) * 150
    }

    if (electron2Ref.current) {
      // Path 2: Second diagonal orbit
      const angle = t
      electron2Ref.current.position.x = Math.cos(angle) * 150
      electron2Ref.current.position.y = Math.cos(angle) * 150
      electron2Ref.current.position.z = Math.sin(angle) * 150
    }

    if (electron3Ref.current) {
      // Path 3: Vertical orbit
      const angle = t
      electron3Ref.current.position.x = Math.sin(angle) * 150
      electron3Ref.current.position.y = Math.cos(angle) * 150
      electron3Ref.current.position.z = 0
    }
  })

  return (
    <group>
      {/* Nucleus */}
      <mesh ref={nucleusRef} castShadow>
        <sphereGeometry args={[100, 20, 20]} />
        <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.5} />
      </mesh>

      {/* Electron Paths */}
      <group>
        <mesh>
          <tubeGeometry args={[path1Curve, 100, 2, 8, false]} />
          <meshBasicMaterial color="#4ECDC4" transparent opacity={0.3} />
        </mesh>
      </group>

      <group>
        <mesh>
          <tubeGeometry args={[path2Curve, 100, 2, 8, false]} />
          <meshBasicMaterial color="#45B7D1" transparent opacity={0.3} />
        </mesh>
      </group>

      <group>
        <mesh>
          <tubeGeometry args={[path3Curve, 100, 2, 8, false]} />
          <meshBasicMaterial color="#96CEB4" transparent opacity={0.3} />
        </mesh>
      </group>

      {/* Electron 1 */}
      <mesh ref={electron1Ref} position={[-150, 150, 0]} castShadow>
        <sphereGeometry args={[15, 64, 64]} />
        <meshStandardMaterial 
          color="#FFE66D" 
          emissive="#FFE66D" 
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Electron 2 */}
      <mesh ref={electron2Ref} position={[150, 150, 0]} castShadow>
        <sphereGeometry args={[15, 64, 64]} />
        <meshStandardMaterial 
          color="#FFE66D" 
          emissive="#FFE66D" 
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Electron 3 */}
      <mesh ref={electron3Ref} position={[0, 150, 0]} castShadow>
        <sphereGeometry args={[15, 64, 64]} />
        <meshStandardMaterial 
          color="#FFE66D" 
          emissive="#FFE66D" 
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Lights */}
      <pointLight position={[130, -100, 300]} color="#0033ff" intensity={1.5} distance={300} />
      <pointLight position={[-100, 5, 350]} color="#33ff00" intensity={2.5} distance={300} />
      <ambientLight color="#404040" intensity={0.5} />
    </group>
  )
}

export default function AtomModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 350], fov: 65 }}>
        <Suspense fallback={null}>
          <Atom />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
} 