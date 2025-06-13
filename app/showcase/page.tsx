import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ShowcasePage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">MARVLS Demos</h1>
        <p className="text-lg text-muted-foreground">
          Watch our interactive 3D AR models for education and training in action.
        </p>
      </div>

      <div className="grid gap-8">
        <div className="aspect-video max-w-4xl mx-auto bg-black/10 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90">
              <Play className="mr-2 h-5 w-5" /> Watch Featured Demo
            </Button>
          </div>
          <Image
            src="/placeholder.svg?height=720&width=1280&text=MARVLS+Featured+Demo"
            alt="MARVLS Featured Demo"
            width={1280}
            height={720}
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Concept Demonstrations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Interactive Anatomy Models",
              description: "Explore human anatomy with detailed 3D models and interactive layers.",
            },
            {
              title: "Physics Simulations",
              description: "Visualize physics concepts through interactive AR demonstrations.",
            },
            {
              title: "Chemistry Molecular Viewer",
              description: "Examine molecular structures and chemical reactions in 3D space.",
            },
            {
              title: "Architectural Visualization",
              description: "Transform 2D blueprints into explorable 3D building models.",
            },
            {
              title: "Historical Recreations",
              description: "Step back in time with historically accurate 3D reconstructions.",
            },
            {
              title: "Engineering Prototypes",
              description: "Visualize engineering designs before physical production.",
            },
          ].map((video, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <Image
                  src={`/placeholder.svg?height=180&width=320&text=Demo+${index + 1}`}
                  alt={`${video.title} demo`}
                  width={320}
                  height={180}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-background/80 hover:bg-background/90 rounded-full"
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Implementation Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Classroom Integration",
              description: "See how students engage with complex concepts using our AR technology.",
            },
            {
              title: "Corporate Training",
              description: "Watch how businesses use AR for more effective employee training.",
            },
            {
              title: "Medical Education",
              description: "Learn how medical schools are incorporating AR into their curriculum.",
            },
            {
              title: "Museum Exhibits",
              description: "Experience our public installations bringing education to life for visitors.",
            },
          ].map((video, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video bg-muted relative">
                  <Image
                    src={`/placeholder.svg?height=180&width=320&text=Implementation+${index + 1}`}
                    alt={`${video.title} video`}
                    width={320}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-background/80 hover:bg-background/90 rounded-full"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground mb-4">{video.description}</p>
                  <Button size="sm" className="gap-1">
                    <Play className="h-4 w-4" /> Watch Video
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to experience these demos yourself?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
