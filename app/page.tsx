"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
  GraduationCap,
  Briefcase,
  Sun,
  Moon,
  MessageCircle,
  Sparkles,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showWelcome, setShowWelcome] = useState(true)
  const [cursorTooltip, setCursorTooltip] = useState("")
  const torchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (torchRef.current && isDarkMode) {
        torchRef.current.style.left = `${e.clientX - 150}px`
        torchRef.current.style.top = `${e.clientY - 150}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "skills", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "AWS",
    "Docker",
    "Git",
    "React Native",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "Socket.io",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/sanjaykandregula/ecommerce-platform",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates using Socket.io. Built with Next.js and PostgreSQL.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/sanjaykandregula/task-manager",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with location-based forecasts. Integrated with multiple weather APIs and features data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/sanjaykandregula/weather-dashboard",
      tech: ["React", "Chart.js", "Weather API", "Geolocation"],
    },
  ]

  const handleMouseEnter = (tooltip: string) => {
    setCursorTooltip(tooltip)
  }

  const handleMouseLeave = () => {
    setCursorTooltip("")
  }

  const themeClasses = isDarkMode
    ? "bg-slate-950 text-white"
    : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900"

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${themeClasses}`}>
      {/* Custom Cursor Tooltip */}
      {cursorTooltip && (
        <div
          className="fixed z-[100] pointer-events-none bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 40,
          }}
        >
          {cursorTooltip}
        </div>
      )}

      {/* Torch Effect for Dark Mode */}
      {isDarkMode && (
        <div
          ref={torchRef}
          className="fixed w-80 h-80 pointer-events-none z-10 opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      )}

      {/* Welcome Greeting */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-4xl">
              <span>Welcome</span>
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <p className="text-xl text-slate-300">Thank you for visiting my portfolio</p>
            <Sparkles className="w-6 h-6 mx-auto text-blue-400 animate-spin" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div
          className={`px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
            isDarkMode ? "bg-slate-900/80 border-slate-700/50" : "bg-white/80 border-slate-200/50"
          }`}
        >
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div
              className="flex items-center space-x-2"
              onMouseEnter={() => handleMouseEnter("Sanjay's Portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                <div
                  className={`w-8 h-8 rounded-lg transform rotate-12 transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                      : "bg-gradient-to-r from-blue-600 to-indigo-700"
                  }`}
                ></div>
                <Code2 className="absolute inset-0 w-5 h-5 m-1.5 text-white transform -rotate-12" />
              </div>
              <span
                className={`text-lg font-bold transition-colors duration-300 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                SK
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => handleMouseEnter(`Go to ${section.label}`)}
                  onMouseLeave={handleMouseLeave}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? isDarkMode
                        ? "bg-blue-500/20 text-blue-400 shadow-lg"
                        : "bg-blue-100 text-blue-700 shadow-lg"
                      : isDarkMode
                        ? "text-slate-300 hover:text-blue-400"
                        : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              onMouseEnter={() => handleMouseEnter(isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode")}
              onMouseLeave={handleMouseLeave}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
              isDarkMode ? "bg-blue-500/10" : "bg-blue-400/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
              isDarkMode ? "bg-indigo-500/10" : "bg-indigo-400/20"
            }`}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1
              className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 bg-clip-text text-transparent"
              }`}
              onMouseEnter={() => handleMouseEnter("Full Stack Developer")}
              onMouseLeave={handleMouseLeave}
            >
              Sanjay Kandregula
            </h1>

            <p className={`text-2xl md:text-3xl mb-4 font-light ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Full Stack Developer
            </p>

            <div
              className={`flex items-center justify-center space-x-2 mb-8 ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
              onMouseEnter={() => handleMouseEnter("Based in Hyderabad, India")}
              onMouseLeave={handleMouseLeave}
            >
              <MapPin className="w-5 h-5" />
              <span>Hyderabad, India</span>
            </div>

            <p
              className={`text-lg mb-12 max-w-3xl mx-auto leading-relaxed font-light ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Crafting digital experiences with modern technologies. I transform ideas into scalable, user-centric
              applications that make a difference. Passionate about clean code, innovative solutions, and continuous
              learning in the ever-evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onMouseEnter={() => handleMouseEnter("Download my resume")}
                onMouseLeave={handleMouseLeave}
                className={`px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                    : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                } shadow-lg hover:shadow-xl`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>

              <div className="flex space-x-4">
                <Link
                  href="https://github.com/sanjaykandregula"
                  onMouseEnter={() => handleMouseEnter("View my GitHub")}
                  onMouseLeave={handleMouseLeave}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode ? "bg-slate-800/50 hover:bg-slate-700/50" : "bg-white/50 hover:bg-white/80"
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/sanjaykandregula"
                  onMouseEnter={() => handleMouseEnter("Connect on LinkedIn")}
                  onMouseLeave={handleMouseLeave}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode ? "bg-slate-800/50 hover:bg-slate-700/50" : "bg-white/50 hover:bg-white/80"
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-16 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              }`}
            >
              About Me
            </h2>

            <Card
              className={`backdrop-blur-md border transition-all duration-300 ${
                isDarkMode ? "bg-slate-900/50 border-slate-700/50" : "bg-white/50 border-slate-200/50"
              }`}
              onMouseEnter={() => handleMouseEnter("Learn more about my journey")}
              onMouseLeave={handleMouseLeave}
            >
              <CardContent className="p-8">
                <p className={`text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  I'm a passionate full stack developer who believes in the power of technology to solve real-world
                  problems. With over 2 years of hands-on experience, I've had the privilege of working on diverse
                  projects that have shaped my understanding of both frontend and backend development. My journey in
                  tech started with curiosity and has evolved into a deep commitment to creating meaningful digital
                  experiences.
                  <br />
                  <br />
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I believe in continuous learning and staying
                  updated with the latest industry trends to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              }`}
            >
              Education
            </h2>

            <Card
              className={`backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                isDarkMode ? "bg-slate-900/50 border-slate-700/50" : "bg-white/50 border-slate-200/50"
              }`}
              onMouseEnter={() => handleMouseEnter("My educational background")}
              onMouseLeave={handleMouseLeave}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-500/20" : "bg-blue-100"}`}>
                    <GraduationCap className={`w-6 h-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                      Bachelor of Technology
                    </h3>
                    <p className={`text-lg mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      Computer Science Engineering
                    </p>
                    <p className={`${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      JNTUH University • 2019-2023
                    </p>
                    <p className={`mt-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Focused on software engineering principles, data structures, algorithms, and modern web
                      technologies. Graduated with distinction and actively participated in coding competitions and tech
                      events.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              }`}
            >
              Experience
            </h2>

            <div className="space-y-6">
              <Card
                className={`backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "bg-slate-900/50 border-slate-700/50" : "bg-white/50 border-slate-200/50"
                }`}
                onMouseEnter={() => handleMouseEnter("My current role")}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"}`}>
                      <Briefcase className={`w-6 h-6 ${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        Full Stack Developer
                      </h3>
                      <p className={`text-lg mb-1 ${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`}>
                        Tech Solutions Inc.
                      </p>
                      <p className={`mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                        2022 - Present • 2+ years
                      </p>
                      <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        Developed and maintained multiple web applications using React, Node.js, and various databases.
                        Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented
                        responsive designs and optimized application performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "bg-slate-900/50 border-slate-700/50" : "bg-white/50 border-slate-200/50"
                }`}
                onMouseEnter={() => handleMouseEnter("Where I started my journey")}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${isDarkMode ? "bg-blue-500/20" : "bg-blue-100"}`}>
                      <Code2 className={`w-6 h-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        Junior Developer Intern
                      </h3>
                      <p className={`text-lg mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                        StartUp Innovations
                      </p>
                      <p className={`mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                        2021 - 2022 • 6 months
                      </p>
                      <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        Gained hands-on experience in web development, learned industry best practices, and contributed
                        to real-world projects. Worked closely with senior developers to understand software development
                        lifecycle.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              }`}
            >
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  onMouseEnter={() => handleMouseEnter(`I work with ${skill}`)}
                  onMouseLeave={handleMouseLeave}
                  className={`p-4 rounded-xl backdrop-blur-md border transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    isDarkMode
                      ? "bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50"
                      : "bg-white/50 border-slate-200/50 hover:bg-white/80"
                  } cursor-pointer`}
                >
                  <p className={`text-center font-medium ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}>
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              }`}
            >
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  onMouseEnter={() => handleMouseEnter(`View ${project.title} details`)}
                  onMouseLeave={handleMouseLeave}
                  className={`backdrop-blur-md border transition-all duration-300 transform hover:scale-105 group ${
                    isDarkMode
                      ? "bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50"
                      : "bg-white/50 border-slate-200/50 hover:bg-white/80"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`${
                              isDarkMode
                                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Link
                        href={project.github}
                        className={`inline-flex items-center transition-colors duration-300 ${
                          isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"
                        }`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? "border-slate-800" : "border-slate-200"}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className={`mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              © 2024 Sanjay Kandregula. Crafted with passion and precision.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="mailto:sanjay.kandregula@email.com"
                onMouseEnter={() => handleMouseEnter("Send me an email")}
                onMouseLeave={handleMouseLeave}
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/sanjaykandregula"
                onMouseEnter={() => handleMouseEnter("Check out my GitHub")}
                onMouseLeave={handleMouseLeave}
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/sanjaykandregula"
                onMouseEnter={() => handleMouseEnter("Connect with me on LinkedIn")}
                onMouseLeave={handleMouseLeave}
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() => setIsContactOpen(true)}
          onMouseEnter={() => handleMouseEnter("Let's get in touch!")}
          onMouseLeave={handleMouseLeave}
          className={`group relative p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isDarkMode ? "bg-gradient-to-r from-blue-600 to-indigo-700" : "bg-gradient-to-r from-blue-600 to-indigo-700"
          }`}
        >
          <MessageCircle className="w-6 h-6 text-white animate-pulse" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
        </button>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card
            className={`w-full max-w-md backdrop-blur-md border ${
              isDarkMode ? "bg-slate-900/95 border-slate-700/50" : "bg-white/95 border-slate-200/50"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Get In Touch
                </h3>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className={`backdrop-blur-md border transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        : "bg-white/50 border-slate-300 text-slate-900 placeholder:text-slate-500"
                    }`}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className={`backdrop-blur-md border transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        : "bg-white/50 border-slate-300 text-slate-900 placeholder:text-slate-500"
                    }`}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className={`backdrop-blur-md border transition-colors duration-300 resize-none ${
                      isDarkMode
                        ? "bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                        : "bg-white/50 border-slate-300 text-slate-900 placeholder:text-slate-500"
                    }`}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white">
                  Send Message
                </Button>
              </form>

              <div className={`mt-6 pt-6 border-t ${isDarkMode ? "border-slate-700" : "border-slate-200"}`}>
                <div className={`space-y-3 text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  <div className="flex items-center">
                    <Mail className={`w-4 h-4 mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    sanjay.kandregula@email.com
                  </div>
                  <div className="flex items-center">
                    <Phone className={`w-4 h-4 mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    +91 9876543210
                  </div>
                  <div className="flex items-center">
                    <MapPin className={`w-4 h-4 mr-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                    Hyderabad, India
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
