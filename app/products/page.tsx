import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const apps = [
    {
      id: "quantum-computing",
      name: "MARVLS: Quantum Computing",
      description: "View augmented reality models of quantum computing concepts through your phone. Visualize concepts like observer dependency, superposition, entanglement, bits, qubits, nuclear and electron spin, logic gates, and trapped ions.",
      features: ["Interactive AR models", "Quantum concepts visualization", "Observer dependency demonstrations", "Qubit and logic gate simulations"],
      platforms: ["iOS", "Mac"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-quantum-computing/id6740221029"
    },
    {
      id: "ar-chemistry",
      name: "MARVLS AR Chemistry",
      description: "Chemistry MARVLS is an AR app for viewing molecular geometry, point groups and symmetry operations, and chemical reactions in 3D.",
      features: ["3D molecular models", "Symmetry operations visualization", "Animated organic chemistry mechanisms", "2D to 3D representations"],
      platforms: ["iOS", "iPod touch", "Mac"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-ar-chemistry/id6651817395"
    },
    {
      id: "physics-2",
      name: "MARVLS AR for Physics 2",
      description: "Visualize abstract and 3D concepts in electric fields, magnetism, right-hand-rules, circuits, electromagnets, motors, generators, optics, 3D integration, nuclear magnetic resonance, and neuroscience.",
      features: ["Electric field visualization", "Magnetic concepts in 3D", "Circuit simulations", "Optics demonstrations"],
      platforms: ["iOS", "Mac", "Apple Vision"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-ar-for-physics-2/id6630392503"
    },
    {
      id: "physics-1",
      name: "MARVLS: Physics I Mechanics",
      description: "Augmented Reality Models of topics in the first semester of a physics course including vectors, centroids, forces, impulse, momentum, projectiles, circular motion, torque, right-hand rule, and simple harmonic motion.",
      features: ["Vector visualization", "Force and motion simulations", "Projectile demonstrations", "Torque and rotation models"],
      platforms: ["iOS", "iPod touch", "Mac", "Apple Vision"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-physics-i-mechanics/id6475370470"
    },
    {
      id: "plasma-physics",
      name: "MARVLS: Plasma Physics",
      description: "View augmented reality models of plasma physics concepts through your phone. Interactive models with changeable variables help visualize complex plasma physics phenomena.",
      features: ["Plasma concept visualization", "Interactive variables", "3D plasma models", "Educational annotations"],
      platforms: ["iOS", "Mac", "Apple Vision"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-plasma-physics/id6452503298"
    },
    {
      id: "chemistry-armv",
      name: "Chemistry ARMV",
      description: "Advanced chemistry visualization tool for molecular structures and reactions in augmented reality. Transform your understanding of chemical concepts through interactive 3D models.",
      features: ["Molecular structure visualization", "Chemical reaction models", "Interactive 3D viewing", "Educational annotations"],
      platforms: ["iOS"],
      appStoreLink: "https://apps.apple.com/us/app/chemistry-armv/id1636151869"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Intro Banner */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our AR Learning Tools</h1>
            <p className="text-xl text-muted-foreground">
              Discover our suite of augmented reality applications designed to transform abstract concepts into interactive 3D experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16">
            {apps.map((app, index) => (
              <div key={app.id} id={app.id} className="scroll-mt-20">
                <Card className="overflow-hidden">
                  <div className="md:grid md:grid-cols-2 gap-6">
                    <div className="p-6 flex items-center justify-center bg-muted/30">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=${app.name}`}
                        alt={app.name}
                        width={400}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{app.name}</CardTitle>
                        <CardDescription className="text-base">{app.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <h3 className="font-semibold mb-2">Key Features:</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {app.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Available on:</h3>
                          <div className="flex flex-wrap gap-2">
                            {app.platforms.map((platform, i) => (
                              <Badge key={i} variant="outline">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-wrap gap-3">
                        <Button size="sm" variant="outline" className="gap-1" asChild>
                          <Link href={app.appStoreLink} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" /> View in App Store
                          </Link>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <Link href="/contact">Request Demo</Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to discuss how we can help bring your educational content to life with augmented reality.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
