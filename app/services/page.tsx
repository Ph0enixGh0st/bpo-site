import Link from "next/link"
import {
  ArrowLeft,
  Code,
  Brain,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Rocket,
  Target,
  Lightbulb,
  Cog,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
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
              <Link href="/services" className="text-white">
                Services
              </Link>
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 bg-transparent">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to propel your business into the future
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Web Development</h2>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                We create stunning, high-performance web applications that deliver exceptional user experiences and
                drive business growth. Our full-stack expertise ensures scalable, maintainable solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>React & Next.js</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>Node.js & Express</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>Database Design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>API Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>Cloud Deployment</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="w-5 h-5 mr-2 text-blue-500" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Modern, responsive interfaces built with React, Next.js, and cutting-edge CSS frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-cyan-500" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Robust server-side solutions with Node.js, databases, and scalable architecture.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cog className="w-5 h-5 mr-2 text-green-500" />
                    DevOps & Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Automated CI/CD pipelines, cloud infrastructure, and performance optimization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid gap-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-purple-500" />
                      Machine Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Custom ML models for predictive analytics, recommendation systems, and data insights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                      Natural Language Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Chatbots, sentiment analysis, and text processing solutions for enhanced user interaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-red-500" />
                      Computer Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Image recognition, object detection, and visual analysis for automated processes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">AI Integration</h2>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Harness the power of artificial intelligence to automate processes, gain insights, and create
                intelligent user experiences that set your business apart from the competition.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                  TensorFlow
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                  PyTorch
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                  OpenAI API
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                  Hugging Face
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                  LangChain
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                  Vector Databases
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Outsourcing Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Software Outsourcing</h2>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Scale your development capacity with our dedicated teams. We provide skilled developers who integrate
                seamlessly with your workflow and deliver high-quality results on time.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-3 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Engagement Models</h4>
                    <p className="text-slate-300">
                      Choose from dedicated teams, project-based, or time & material models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="w-6 h-6 mr-3 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-slate-300">
                      Rigorous testing processes and code reviews ensure premium quality delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-6 h-6 mr-3 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Teams</h4>
                    <p className="text-slate-300">
                      Senior developers with proven track records in various technologies and domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle>Dedicated Development Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Full-time dedicated teams that work exclusively on your projects with complete transparency and
                    control.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Direct communication with developers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Agile development methodology
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Regular progress reports
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle>Project-Based Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Complete project delivery with fixed scope, timeline, and budget for well-defined requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Fixed price and timeline
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      End-to-end project management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Quality guarantees
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-slate-300">Understanding your requirements, goals, and technical constraints</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-slate-300">Creating detailed project roadmaps and technical architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-slate-300">Agile development with regular updates and feedback loops</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-slate-300">Testing, deployment, and ongoing support for your solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your project requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                Request Quote
              </Button>
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
