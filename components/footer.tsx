import Link from "next/link"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-md bg-primary flex items-center justify-center">
                <span className="font-bold text-white">M</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">MARVLS</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating tools that turn flat content into immersive experiences for education.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/science"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Science AR Models
                </Link>
              </li>
              <li>
                <Link
                  href="/products/stem"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  STEM Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/products/history"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  History Visualizations
                </Link>
              </li>
              <li>
                <Link
                  href="/products/anatomy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Anatomy Models
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Teaching Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <p className="text-sm text-muted-foreground mb-4">
              <a href="mailto:mmccolga@marvls.net" className="hover:text-foreground transition-colors">
                mmccolga@marvls.net
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:mmccolga@marvls.net"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} MARVLS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
