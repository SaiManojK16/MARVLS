"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Text, Float, Html } from "@react-three/drei"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, AtomIcon, BrainIcon, DnaIcon } from "lucide-react"
import { Mesh } from "three"

function Model({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
    }
  })

  return <primitive ref={ref} object={scene} position={position} scale={scale} rotation={rotation} />
}

function AtomModel({ position = [0, 0, 0], color = "#7c3aed" }) {
  const group = useRef()
  const electron1 = useRef()
  const electron2 = useRef()
  const electron3 = useRef()

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

function DnaModel({ position = [0, 0, 0], color1 = "#7c3aed", color2 = "#10b981" }) {
  const group = useRef()

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

function BrainModel({ position = [0, 0, 0], color = "#7c3aed" }) {
  const group = useRef()
  const connections = useRef([])

  // Generate random connections
  useEffect(() => {
    const newConnections = []
    for (let i = 0; i < 50; i++) {
      newConnections.push({
        start: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3],
        end: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3],
        speed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2,
        thickness: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.5 ? "#10b981" : "#fbbf24",
      })
    }
    connections.current = newConnections
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (group.current) {
      group.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={group} position={position}>
      {/* Brain hemisphere 1 */}
      <mesh position={[-0.6, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Brain hemisphere 2 */}
      <mesh position={[0.6, 0, 0]} rotation={[0, Math.PI, 0]}>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Neural connections */}
      {connections.current.map((connection, i) => (
        <mesh key={i}>
          <sphereGeometry args={[connection.thickness * 2, 8, 8]} />
          <meshStandardMaterial color={connection.color} emissive={connection.color} emissiveIntensity={0.5} />
          <group position={connection.start} />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  const [modelType, setModelType] = useState("atom")
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 8)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {modelType === "atom" && <AtomModel position={[0, 0, 0]} />}
        {modelType === "dna" && <DnaModel position={[0, 0, 0]} />}
        {modelType === "brain" && <BrainModel position={[0, 0, 0]} />}
        {modelType === "duck" && <Model position={[0, -1, 0]} scale={2} />}
      </Float>

      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        MARVLS 3D VISUALIZATION
      </Text>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
      />

      <group position={[0, -3, 0]}>
        <Html center>
          <div className="flex gap-2 bg-black/30 p-2 rounded-lg backdrop-blur-sm">
            <Button
              size="sm"
              variant={modelType === "atom" ? "default" : "outline"}
              className="bg-primary/80 hover:bg-primary text-white"
              onClick={() => setModelType("atom")}
            >
              <AtomIcon className="h-4 w-4 mr-1" /> Atom
            </Button>
            <Button
              size="sm"
              variant={modelType === "dna" ? "default" : "outline"}
              className="bg-primary/80 hover:bg-primary text-white"
              onClick={() => setModelType("dna")}
            >
              <DnaIcon className="h-4 w-4 mr-1" /> DNA
            </Button>
            <Button
              size="sm"
              variant={modelType === "brain" ? "default" : "outline"}
              className="bg-primary/80 hover:bg-primary text-white"
              onClick={() => setModelType("brain")}
            >
              <BrainIcon className="h-4 w-4 mr-1" /> Brain
            </Button>
            <Button
              size="sm"
              variant={modelType === "duck" ? "default" : "outline"}
              className="bg-primary/80 hover:bg-primary text-white"
              onClick={() => setModelType("duck")}
            >
              <Cube className="h-4 w-4 mr-1" /> Duck
            </Button>
          </div>
        </Html>
      </group>
    </>
  )
}

export default function ARModelViewer() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
