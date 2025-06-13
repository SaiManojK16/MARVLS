"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Text, Float, Html } from "@react-three/drei"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, AtomIcon, BrainIcon, DnaIcon } from "lucide-react"
import { Mesh, Group, Object3D, Vector3 } from "three"

type Position = [number, number, number]

function Model({ position = [0, 0, 0] as Position, scale = 1, rotation = [0, 0, 0] as Position }) {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const ref = useRef<Object3D>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
    }
  })

  return <primitive ref={ref} object={scene} position={position} scale={scale} rotation={rotation} />
}

function AtomModel({ position = [0, 0, 0] as Position, color = "#7c3aed" }) {
  const group = useRef<Group>(null)
  const electron1 = useRef<Mesh>(null)
  const electron2 = useRef<Mesh>(null)
  const electron3 = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (electron1.current) {
      electron1.current.position.x = Math.sin(t * 1.5) * 1.5
      electron1.current.position.z = Math.cos(t * 1.5) * 1.5
    }

    if (electron2.current) {
      electron2.current.position.x = Math.sin(t * 1.2 + 2) * 2
      electron2.current.position.z = Math.cos(t * 1.2 + 2) * 2
    }

    if (electron3.current) {
      electron3.current.position.y = Math.sin(t * 1) * 1.8
      electron3.current.position.z = Math.cos(t * 1) * 1.8
    }

    if (group.current) {
      group.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={group} position={position}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Electron Orbits */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      {/* Electrons */}
      <mesh ref={electron1}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
      </mesh>

      <mesh ref={electron2}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
      </mesh>

      <mesh ref={electron3}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function DnaModel({ position = [0, 0, 0] as Position, color1 = "#7c3aed", color2 = "#10b981" }) {
  const group = useRef<Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005
    }
  })

  const pairs = 10
  const pairDistance = 0.7
  const radius = 1.2
  const strandWidth = 0.2
  const nucleotideRadius = 0.2

  return (
    <group ref={group} position={position}>
      {/* Create the DNA strands */}
      {Array.from({ length: pairs * 4 }).map((_, i) => {
        const t = i / (pairs * 4)
        const angle = t * Math.PI * 4
        const y = (i * pairDistance) / 4 - (pairs * pairDistance) / 2

        // Positions for the two strands
        const x1 = Math.cos(angle) * radius
        const z1 = Math.sin(angle) * radius
        const x2 = Math.cos(angle + Math.PI) * radius
        const z2 = Math.sin(angle + Math.PI) * radius

        // Only create connections at every 4th position (for the base pairs)
        const createConnection = i % 4 === 0

        return (
          <group key={i}>
            {/* Strand 1 */}
            <mesh position={[x1, y, z1]}>
              <sphereGeometry args={[strandWidth, 16, 16]} />
              <meshStandardMaterial color={color1} />
            </mesh>

            {/* Strand 2 */}
            <mesh position={[x2, y, z2]}>
              <sphereGeometry args={[strandWidth, 16, 16]} />
              <meshStandardMaterial color={color2} />
            </mesh>

            {/* Base pair connection */}
            {createConnection && (
              <>
                <mesh position={[x1 * 0.7, y, z1 * 0.7]}>
                  <sphereGeometry args={[nucleotideRadius, 16, 16]} />
                  <meshStandardMaterial color="#fbbf24" />
                </mesh>

                <mesh position={[x2 * 0.7, y, z2 * 0.7]}>
                  <sphereGeometry args={[nucleotideRadius, 16, 16]} />
                  <meshStandardMaterial color="#fbbf24" />
                </mesh>

                <mesh>
                  <cylinderGeometry
                    args={[
                      0.05,
                      0.05,
                      Math.sqrt(Math.pow(x2 * 0.7 - x1 * 0.7, 2) + Math.pow(z2 * 0.7 - z1 * 0.7, 2)),
                      8,
                    ]}
                  />
                  <meshStandardMaterial color="#ffffff" />
                  <group
                    position={[(x1 * 0.7 + x2 * 0.7) / 2, y, (z1 * 0.7 + z2 * 0.7) / 2]}
                    rotation={[Math.PI / 2, 0, Math.atan2(z2 * 0.7 - z1 * 0.7, x2 * 0.7 - x1 * 0.7)]}
                  >
                    <primitive object={new Mesh()} />
                  </group>
                </mesh>
              </>
            )}
          </group>
        )
      })}
    </group>
  )
}

function BrainModel({ position = [0, 0, 0] as Position, color = "#7c3aed" }) {
  const group = useRef<Group>(null)
  const connections = useRef<Array<{
    start: Position
    end: Position
    speed: number
    offset: number
    thickness: number
    color: string
  }>>([])

  // Generate random connections
  useEffect(() => {
    const newConnections = []
    for (let i = 0; i < 50; i++) {
      newConnections.push({
        start: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3] as Position,
        end: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3] as Position,
        speed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2,
        thickness: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.5 ? "#10b981" : "#fbbf24",
      })
    }
    connections.current = newConnections
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={group} position={position}>
      {/* Brain core */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Neural connections */}
      {connections.current.map((connection, i) => (
        <mesh key={i}>
          <cylinderGeometry
            args={[
              connection.thickness,
              connection.thickness,
              Math.sqrt(
                Math.pow(connection.end[0] - connection.start[0], 2) +
                  Math.pow(connection.end[1] - connection.start[1], 2) +
                  Math.pow(connection.end[2] - connection.start[2], 2)
              ),
              8,
            ]}
          />
          <meshStandardMaterial color={connection.color} />
          <group
            position={[
              (connection.start[0] + connection.end[0]) / 2,
              (connection.start[1] + connection.end[1]) / 2,
              (connection.start[2] + connection.end[2]) / 2,
            ]}
            rotation={[
              Math.atan2(
                Math.sqrt(
                  Math.pow(connection.end[0] - connection.start[0], 2) +
                    Math.pow(connection.end[2] - connection.start[2], 2)
                ),
                connection.end[1] - connection.start[1]
              ),
              0,
              Math.atan2(connection.end[2] - connection.start[2], connection.end[0] - connection.start[0]),
            ]}
          >
            <primitive object={new Mesh()} />
          </group>
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  const [activeModel, setActiveModel] = useState("atom")

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      {activeModel === "atom" && <AtomModel position={[0, 0, 0]} />}
      {activeModel === "dna" && <DnaModel position={[0, 0, 0]} />}
      {activeModel === "brain" && <BrainModel position={[0, 0, 0]} />}

      <Html position={[0, -2, 0]} center>
        <div className="flex gap-2">
          <Button
            variant={activeModel === "atom" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveModel("atom")}
            className="flex items-center gap-2"
          >
            <AtomIcon className="h-4 w-4" />
            Atom
          </Button>
          <Button
            variant={activeModel === "dna" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveModel("dna")}
            className="flex items-center gap-2"
          >
            <DnaIcon className="h-4 w-4" />
            DNA
          </Button>
          <Button
            variant={activeModel === "brain" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveModel("brain")}
            className="flex items-center gap-2"
          >
            <BrainIcon className="h-4 w-4" />
            Brain
          </Button>
        </div>
      </Html>
    </>
  )
}

export default function ARModelViewer() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
