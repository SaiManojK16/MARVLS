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
      description: "Explore quantum computing concepts through interactive visualizations and augmented reality models.",
      features: ["Interactive quantum circuit visualization", "Step-by-step quantum algorithms", "3D quantum state representations", "Educational tutorials"],
      platforms: ["iOS"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-quantum-computing/id6740221029"
    },
    {
      id: "ar-chemistry",
      name: "MARVLS AR Chemistry",
      description: "Visualize chemical structures and reactions in augmented reality for enhanced learning.",
      features: ["3D molecular structures", "Interactive chemical reactions", "Periodic table exploration", "Chemical bonding visualization"],
      platforms: ["iOS"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-ar-chemistry/id6651817395"
    },
    {
      id: "physics-2",
      name: "MARVLS AR for Physics 2",
      description: "Experience advanced physics concepts in interactive 3D with comprehensive visualizations.",
      features: ["Advanced physics simulations", "Interactive experiments", "Real-time 3D modeling", "Comprehensive tutorials"],
      platforms: ["iOS"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-ar-for-physics-2/id6630392503"
    },
    {
      id: "physics-mechanics",
      name: "MARVLS: Physics I Mechanics",
      description: "Learn fundamental mechanics through immersive AR experiences and interactive simulations.",
      features: ["Motion and forces visualization", "Interactive mechanics experiments", "Real-world physics applications", "Step-by-step problem solving"],
      platforms: ["iOS"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-physics-i-mechanics/id6475370470"
    },
    {
      id: "plasma-physics",
      name: "MARVLS: Plasma Physics",
      description: "Explore plasma physics and chemistry concepts through interactive 3D visualizations.",
      features: ["Plasma state visualization", "Particle interactions", "Electromagnetic field modeling", "Real-time simulations"],
      platforms: ["iOS"],
      appStoreLink: "https://apps.apple.com/us/app/marvls-plasma-physics/id6452503298"
    },
    {
      id: "chemistry-armv",
      name: "Chemistry ARMV",
      description: "Study chemistry concepts through augmented reality models and interactive experiments.",
      features: ["AR molecular modeling", "Chemical reaction simulations", "Interactive periodic table", "3D atomic structures"],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our toolkit for immersive learning</h1>
            <p className="text-xl text-muted-foreground">
              Discover our suite of applications designed to transform flat content into engaging 3D experiences.
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
                        <Button size="sm" className="gap-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Play className="h-4 w-4" /> Watch Demo
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1 text-foreground" asChild>
                          <Link href={app.appStoreLink} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" /> Download on App Store
                          </Link>
                        </Button>
                        <Button size="sm" variant="secondary" className="text-secondary-foreground" asChild>
                          <Link href="/contact">Get Support</Link>
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

      {/* Bundles Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bundle & Save</h2>
            <p className="text-lg text-muted-foreground">
              Get more value with our carefully curated app bundles designed for different needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Pack",
                description: "Perfect for individuals and small teams just getting started with AR/VR.",
                includes: ["MARVLS Visualizer", "MARVLS Scanner"],
                price: "$99/month",
              },
              {
                name: "Advanced Pack",
                description: "Ideal for educators and content creators who need comprehensive tools.",
                includes: ["MARVLS Visualizer", "MARVLS Creator", "MARVLS Presenter"],
                price: "$199/month",
                highlighted: true,
              },
              {
                name: "Instructor Pack",
                description: "Complete solution for educational institutions and training programs.",
                includes: ["MARVLS Visualizer", "MARVLS Classroom", "MARVLS Creator", "MARVLS Presenter"],
                price: "$299/month",
              },
            ].map((bundle, index) => (
              <Card key={index} className={bundle.highlighted ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{bundle.name}</CardTitle>
                  <CardDescription>{bundle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">{bundle.price}</p>
                  <h3 className="font-semibold mb-2">Includes:</h3>
                  <ul className="space-y-2">
                    {bundle.includes.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={bundle.highlighted ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Need a custom solution?</p>
            <Button asChild>
              <Link href="/contact">
                Contact Us for Custom Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
