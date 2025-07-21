"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Truck,
  MapPin,
  ChefHat,
  Smartphone,
  Users,
  Clock,
  Star,
  Download,
  Play,
  Apple,
  CheckCircle,
  Menu,
  X,
  Quote,
  Shield,
  Zap,
  Heart,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Commuter",
      content:
        "RideDine transformed my daily commute! Instead of boring bus rides, I get to enjoy amazing food while traveling to work. It's like having a mobile restaurant!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Food Enthusiast",
      content:
        "The quality of food is incredible! Fresh ingredients, creative dishes, and the experience of dining while traveling is absolutely unique. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Kimani",
      role: "RideDine Driver",
      content:
        "As a driver, I love the flexibility and the extra income. The platform is easy to use and the support team is always helpful. Great opportunity!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Truck className="h-8 w-8 text-[#27AE60]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#2980B9] rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-[#2C3E50]">Gourmet Ride</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[#2C3E50] hover:text-[#27AE60] transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-[#2C3E50] hover:text-[#27AE60] transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-[#2C3E50] hover:text-[#27AE60] transition-colors">
              Reviews
            </a>
            <a href="#download" className="text-[#2C3E50] hover:text-[#27AE60] transition-colors">
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#how-it-works" className="block text-[#2C3E50] hover:text-[#27AE60]">
                How It Works
              </a>
              <a href="#features" className="block text-[#2C3E50] hover:text-[#27AE60]">
                Features
              </a>
              <a href="#testimonials" className="block text-[#2C3E50] hover:text-[#27AE60]">
                Reviews
              </a>
              <a href="#download" className="block text-[#2C3E50] hover:text-[#27AE60]">
                Download
              </a>
              
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-[#F7F9F9] via-white to-[#E8F5E8]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#27AE60]/10 text-[#27AE60] border-[#27AE60]/20">
                  🚀 Revolutionary Transport Experience
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#2C3E50] leading-tight">
                  Ride, Dine &<span className="text-[#27AE60]"> Arrive</span> in Style
                </h1>
                <p className="text-xl text-[#7F8C8D] leading-relaxed">
                  Experience the world's first mobile dining transport service. Book your ride, enjoy gourmet cuisine
                  onboard, and arrive at your destination completely satisfied.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#27AE60] hover:bg-[#229954] text-lg px-8 py-4" asChild>
                  <Link href="#download">
                    <Download className="mr-2 h-5 w-5" />
                    Download App
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
                  <Link href="#how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#27AE60]">15</div>
                  <div className="text-sm text-[#7F8C8D]">Max Passengers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2980B9]">4.9★</div>
                  <div className="text-sm text-[#7F8C8D]">User Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#27AE60]">24/7</div>
                  <div className="text-sm text-[#7F8C8D]">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="RideDine Food Truck"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#27AE60]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2980B9]/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#2980B9]/10 text-[#2980B9] border-[#2980B9]/20 mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">How Gourmet Ride Works</h2>
            <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
              Three simple steps to transform your commute into a culinary adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#27AE60]/20 transition-colors">
                  <Smartphone className="h-10 w-10 text-[#27AE60]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#27AE60] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Book & Order</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Choose your pickup location, destination, and pre-order from our curated menu of fresh, locally-sourced
                dishes through our mobile app.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2980B9]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#2980B9]/20 transition-colors">
                  <ChefHat className="h-10 w-10 text-[#2980B9]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2980B9] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Dine Onboard</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Board our comfortable food truck and enjoy your freshly prepared meal while traveling. Experience dining
                like never before!
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#27AE60]/20 transition-colors">
                  <MapPin className="h-10 w-10 text-[#27AE60]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#27AE60] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Arrive Satisfied</h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Get dropped off at your destination having enjoyed a unique dining experience. No more boring commutes
                or rushed meals!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-[#F7F9F9]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#27AE60]/10 text-[#27AE60] border-[#27AE60]/20 mb-4">Why Choose RideDine</Badge>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Features That Make Us Special</h2>
            <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
              Discover what makes RideDine the future of urban transportation and dining
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#27AE60]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#27AE60]" />
                </div>
                <CardTitle className="text-[#2C3E50]">Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  All our drivers are thoroughly vetted and vehicles are regularly inspected. Your safety is our top
                  priority.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2980B9]/10 rounded-lg flex items-center justify-center mb-4">
                  <ChefHat className="h-6 w-6 text-[#2980B9]" />
                </div>
                <CardTitle className="text-[#2C3E50]">Fresh Cuisine</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Locally sourced ingredients prepared fresh daily by professional chefs. Taste the difference quality
                  makes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#27AE60]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#27AE60]" />
                </div>
                <CardTitle className="text-[#2C3E50]">Time Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Save time by combining your commute with dining. No more separate trips for food or waiting in
                  restaurant queues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2980B9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#2980B9]" />
                </div>
                <CardTitle className="text-[#2C3E50]">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Track your ride in real-time, get accurate arrival estimates, and stay informed throughout your
                  journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#27AE60]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#27AE60]" />
                </div>
                <CardTitle className="text-[#2C3E50]">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Reduce your carbon footprint by sharing rides and supporting sustainable local food practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2980B9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#2980B9]" />
                </div>
                <CardTitle className="text-[#2C3E50]">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Connect with fellow passengers, support local businesses, and be part of a growing community of food
                  and travel enthusiasts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#2980B9]/10 text-[#2980B9] border-[#2980B9]/20 mb-4">Customer Stories</Badge>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">What Our Users Say</h2>
            <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
              Real experiences from real people who've transformed their daily commute
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="h-12 w-12 text-[#27AE60]/30" />
                </div>

                <div className="text-center mb-8">
                  <p className="text-xl text-[#2C3E50] leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-[#2C3E50]">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-[#7F8C8D]">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-[#27AE60]" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-[#27AE60] to-[#2980B9]">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Commute?</h2>
            <p className="text-xl text-white/90 mb-8">
              Download the RideDine app today and experience the future of transportation and dining
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-[#27AE60] hover:bg-gray-100 text-lg px-8 py-4">
                <Apple className="mr-2 h-6 w-6" />
                Download for iOS
              </Button>
              <Button size="lg" className="bg-white text-[#2980B9] hover:bg-gray-100 text-lg px-8 py-4">
                <Download className="mr-2 h-6 w-6" />
                Download for Android
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-[#2C3E50]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-8 w-8 text-[#27AE60]" />
                <span className="text-2xl font-bold text-white">Gourmet Ride</span>
              </div>
              <p className="text-gray-400 mb-4">Revolutionizing urban transportation with mobile dining experiences.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#27AE60]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#27AE60]">F</span>
                </div>
                <div className="w-10 h-10 bg-[#2980B9]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#2980B9]">T</span>
                </div>
                <div className="w-10 h-10 bg-[#27AE60]/20 rounded-full flex items-center justify-center">
                  <Link href={'https://www.instagram.com/gourmet.ride?igsh=MWNvZW9xb3piN2t6aQ=='}>
                    <span className="text-[#27AE60]">In</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    How to Book
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Menu Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Safety Guidelines
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">For Drivers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Become a Driver
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#27AE60] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Gourmet Ride. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-[#27AE60] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#27AE60] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#27AE60] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
