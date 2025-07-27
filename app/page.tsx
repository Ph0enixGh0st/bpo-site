import Link from "next/link"
import { ArrowRight, Code, Brain, Users, CheckCircle, Star, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">TechFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 bg-transparent">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Next-Gen Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transforming businesses through cutting-edge web development, AI integration, and premium software
              outsourcing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-slate-300 mb-6">
                  Modern, responsive web applications built with the latest technologies and best practices.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    React & Next.js
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Full-stack Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Mobile-first Design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
                <p className="text-slate-300 mb-6">
                  Intelligent solutions that automate processes and enhance user experiences.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Predictive Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Software Outsourcing</h3>
                <p className="text-slate-300 mb-6">
                  Dedicated development teams that seamlessly integrate with your workflow.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Dedicated Teams
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Agile Methodology
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    24/7 Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">150+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose TechFlow?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-slate-300">Rapid development cycles without compromising quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-slate-300">Serving clients worldwide with 24/7 availability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-slate-300">Rigorous testing and quality assurance processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our expertise can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                Get Free Consultation
              </Button>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-800 px-8 py-3 bg-transparent"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">TechFlow</span>
              </div>
              <p className="text-slate-400">Transforming businesses through innovative technology solutions.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Software Outsourcing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>hello@techflow.dev</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
