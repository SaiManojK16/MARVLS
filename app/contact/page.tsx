"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleInquiryTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      toast.success('Message sent successfully! We will get back to you soon.')
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "",
        message: ""
      })
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to transform your 2D content? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={handleInquiryTypeChange}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a Demo</SelectItem>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alternative Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a
                        href="mailto:mmccolga@marvls.net"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        mmccolga@marvls.net
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=MARVLS"
                    alt="MARVLS Brand Image"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Have questions about our products or services?</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/faq">Check our FAQ</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
