import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, CuboidIcon as Cube, Microscope, Smartphone, Star, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AtomModel from "@/components/atom-model"
import DNAModel from "@/components/dna-model"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Atom Model */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_70%)]"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 1}px`,
                height: `${Math.random() * 6 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite ${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                From 2D to 3D—we make ideas <span className="text-accent animate-pulse-subtle">pop off the page</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Creating tools that turn flat content into immersive experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button size="lg" className="bg-accent text-black hover:bg-accent/90 animate-bounce-subtle" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-foreground border-foreground hover:bg-foreground/10" asChild>
                  <Link href="/showcase">
                    View Demos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden animate-fade-in-right">
              <AtomModel />
            </div>
          </div>
        </div>
      </section>

      {/* Why MARVLS Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why MARVLS?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              If you're looking for the right teaching tool to rely on, MARVLS is the perfect fit. For any of your
              teaching activities, we're ready to turn them into magical-like experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="feature-card-1 border-none hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Practice visual-based learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Help students visualize complex concepts through interactive 3D models they can manipulate and
                  explore.
                </p>
              </CardContent>
            </Card>

            <Card
              className="feature-card-2 border-none hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Cube className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Make the abstract concrete</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Transform abstract scientific and mathematical concepts into tangible 3D objects students can
                  understand.
                </p>
              </CardContent>
            </Card>

            <Card
              className="feature-card-3 border-none hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <div className="bg-white/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Interactive & collaborative learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Engage students with interactive lessons that promote collaboration and deeper understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational 3D Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Explore the Universe in 3D</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our interactive 3D models bring complex concepts to life. Visualize the solar system, explore atomic
                structures, or dive into human anatomy—all with intuitive controls that make learning engaging and
                memorable.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Interactive models that respond to student manipulation</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Accurate scientific representations with educational annotations</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Cross-platform compatibility for classroom and remote learning</p>
                </li>
              </ul>
              <Button className="group" asChild>
                <Link href="/products">
                  Explore Educational Models
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in-right">
              <DNAModel />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products / Apps */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up text-foreground">
            Our AR Learning Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "MARVLS: Quantum Computing",
                icon: <Cube className="h-6 w-6 text-primary" />,
                description: "Explore quantum computing concepts through interactive visualizations.",
                image: "/placeholder.svg?height=200&width=400&text=Quantum+Computing",
                link: "https://apps.apple.com/us/app/marvls-quantum-computing/id6740221029",
                delay: 0.1,
              },
              {
                name: "MARVLS AR Chemistry",
                icon: <Cube className="h-6 w-6 text-secondary" />,
                description: "Visualize chemical structures and reactions in augmented reality.",
                image: "/placeholder.svg?height=200&width=400&text=AR+Chemistry",
                link: "https://apps.apple.com/us/app/marvls-ar-chemistry/id6651817395",
                delay: 0.2,
              },
              {
                name: "MARVLS AR for Physics 2",
                icon: <Cube className="h-6 w-6 text-accent" />,
                description: "Experience advanced physics concepts in interactive 3D.",
                image: "/placeholder.svg?height=200&width=400&text=Physics+2",
                link: "https://apps.apple.com/us/app/marvls-ar-for-physics-2/id6630392503",
                delay: 0.3,
              },
              {
                name: "MARVLS: Physics I Mechanics",
                icon: <Cube className="h-6 w-6 text-primary" />,
                description: "Learn fundamental mechanics through immersive AR experiences.",
                image: "/placeholder.svg?height=200&width=400&text=Physics+I",
                link: "https://apps.apple.com/us/app/marvls-physics-i-mechanics/id6475370470",
                delay: 0.4,
              },
              {
                name: "MARVLS: Plasma Physics",
                icon: <Cube className="h-6 w-6 text-secondary" />,
                description: "Explore plasma physics and chemistry in interactive 3D space.",
                image: "/placeholder.svg?height=200&width=400&text=Plasma+Physics",
                link: "https://apps.apple.com/us/app/marvls-plasma-physics/id6452503298",
                delay: 0.5,
              },
              {
                name: "Chemistry ARMV",
                icon: <Cube className="h-6 w-6 text-accent" />,
                description: "Study chemistry concepts through augmented reality models.",
                image: "/placeholder.svg?height=200&width=400&text=Chemistry+ARMV",
                link: "https://apps.apple.com/us/app/chemistry-armv/id1636151869",
                delay: 0.6,
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${product.delay}s` }}
              >
                <CardHeader className="pb-0">
                  <div className="mb-4 h-48 bg-muted rounded-md overflow-hidden relative group">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 p-2 rounded-full">{product.icon}</div>
                  </div>
                  <CardTitle className="text-foreground">{product.name}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link href={product.link} target="_blank" rel="noopener noreferrer">
                      Download App{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Button size="lg" className="animate-pulse-subtle" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-white">See MARVLS in Action</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Watch how our AR models bring learning to life in classrooms and training environments.
            </p>
          </div>

          <div className="aspect-video max-w-4xl mx-auto bg-black/10 rounded-lg overflow-hidden relative animate-fade-in-up">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-subtle">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=720&width=1280&text=MARVLS+Demo+Video"
              alt="MARVLS Demo Video"
              width={1280}
              height={720}
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={item}
                className="aspect-video bg-black/10 rounded-md overflow-hidden relative hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <Image
                  src={`/placeholder.svg?height=180&width=320&text=Video+${item}`}
                  alt={`Video thumbnail ${item}`}
                  width={320}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up text-foreground">
            What Educators Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Science Teacher",
                quote:
                  "MARVLS has transformed how my students engage with complex concepts. The 3D visualizations make learning come alive!",
                delay: 0.1,
              },
              {
                name: "David Chen",
                role: "University Professor",
                quote:
                  "The AR capabilities in these apps have revolutionized my teaching approach. Students retain information better when they can interact with it.",
                delay: 0.2,
              },
              {
                name: "Emily Rodriguez",
                role: "Corporate Trainer",
                quote:
                  "We've seen a 40% improvement in training outcomes since implementing MARVLS tools in our onboarding process.",
                delay: 0.3,
              },
              {
                name: "Michael Taylor",
                role: "EdTech Director",
                quote:
                  "The support from the MARVLS team has been exceptional. They truly understand educational needs and deliver solutions that work.",
                delay: 0.4,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-accent fill-accent animate-pulse-subtle"
                        style={{ animationDelay: `${0.1 * star}s` }}
                      />
                    ))}
                  </div>
                  <p className="italic mb-4 text-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary h-10 w-10 flex items-center justify-center">
                      <span className="font-semibold text-white">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Learning?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join educators and students who are experiencing learning in a whole new dimension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90 animate-bounce-subtle" asChild>
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-foreground border-foreground hover:bg-foreground/10" asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
