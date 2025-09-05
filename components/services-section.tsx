"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Pause, Play } from "lucide-react"
import Image from "next/image"
import { services } from "@/lib/services-data"
import Link from "next/link"
import { AnimatePresence } from "motion/react"
import { FadeUp } from "./fade-up"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const reqRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const DURATION = 5000 // 5 seconds per service

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    const el = document.getElementById("services")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Animation loop with requestAnimationFrame
  const loop = (ts: number) => {
    if (!startRef.current) startRef.current = ts
    const elapsed = ts - startRef.current
    const pct = Math.min((elapsed / DURATION) * 100, 100)
    setProgress(pct)

    if (pct >= 100) {
      setActiveTab((prev) => (prev + 1) % services.length)
      setProgress(0)
      startRef.current = null
    } else {
      reqRef.current = requestAnimationFrame(loop)
    }
  }

  useEffect(() => {
    if (isPaused) return
    reqRef.current = requestAnimationFrame(loop)
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current)
    }
  }, [activeTab, isPaused])

  const activeService = services[activeTab]

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const resetTimer = () => {
    startRef.current = null
    setProgress(0)
  }

  return (
    <section id="services" className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-6 gap-8">
              <div className="lg:col-span-2 space-y-3">
                {services.map((service, index) => {
                  const ServiceIcon = service.icon
                  const isActive = index === activeTab

                  return (
                    <button
                      key={service.title}
                      onClick={() => {resetTimer(); setActiveTab(index);}}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group bg-primary/10 cursor-pointer ${isActive
                        ? "shadow-lg border-2 border-primary scale-105"
                        : "hover:shadow-md border-2 border-transparent"
                        }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                          <ServiceIcon className="w-6 h-6 text-white dark:text-black" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold transition-colors duration-300 ${isActive ? "text-primary" : "text-slate-900 group-hover:text-primary dark:text-slate-100 dark:group-hover:text-primary"}`}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{service.shortDescription}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-slate-400 group-hover:text-primary group-hover:translate-x-1"}`} />
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="lg:col-span-4">
                <Card className="h-full shadow-xl border-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <FadeUp
                      key={activeService.slug}
                      transition={{ duration: 0.3 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="h-full"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={activeService.image}
                          alt={activeService.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <ProgressCircle
                            isPaused={isPaused}
                            progress={progress}
                            togglePause={togglePause}
                          />
                        </div>
                      </div>
                      <CardHeader className="py-4">
                        <CardTitle className="text-2xl font-bold mb-2">{activeService.title}</CardTitle>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{activeService.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-6">
                          {activeService.features.map((feature) => (
                            <div key={feature} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild className="w-full cursor-pointer">
                          <Link href={`/services/${activeService.slug}`}>
                            Learn More About {activeService.title}
                          </Link>
                        </Button>
                      </CardContent>
                    </FadeUp>
                  </AnimatePresence>
                </Card>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto pb-4 mb-6 space-x-3 scrollbar-hide">
                {services.map((service, index) => {
                  const ServiceIcon = service.icon
                  const isActive = index === activeTab

                  return (
                    <button
                      key={service.title}
                      onClick={() => setActiveTab(index)}
                      className={`flex-shrink-0 p-3 rounded-lg transition-all duration-300 ${isActive ? "bg-primary text-white dark:text-black shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      <div className="flex flex-col items-center space-y-2 min-w-[80px]">
                        <ServiceIcon className="w-6 h-6" />
                        <span className="text-xs font-medium text-center leading-tight">{service.title.split(" ")[0]}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <Card className="shadow-xl border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activeService.image || "/placeholder.svg"}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <ProgressCircle
                      isPaused={isPaused}
                      progress={progress}
                      togglePause={togglePause}
                    />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold mb-2">{activeService.title}</CardTitle>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{activeService.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {activeService.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full cursor-pointer">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProgressCircle = ({ isPaused, progress, togglePause }: { isPaused: boolean, progress: number, togglePause: () => void }) => {
  const circumference = 2 * Math.PI * 16
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-12 h-12 cursor-pointer" onClick={togglePause}>
      <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
        />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={isPaused ? strokeDasharray : strokeDashoffset}
          className="transition-all duration-200 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Button variant="link" className="text-white" size="sm">
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  )
}
