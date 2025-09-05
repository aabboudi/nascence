"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Logo from "./logo"

export function RebrandWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSeenWelcome, setHasSeenWelcome] = useState(true) // Default to true to prevent flash

  useEffect(() => {
    // Check if user has already seen the welcome modal
    const hasSeenRebrand = localStorage.getItem("nascence-rebrand-welcome-seen")

    if (!hasSeenRebrand) {
      // Small delay to ensure page has loaded
      const timer = setTimeout(() => {
        setHasSeenWelcome(false)
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("nascence-rebrand-welcome-seen", "true")
  }

  // const handleTakeTour = () => {
  //   setIsOpen(false)
  //   localStorage.setItem("nascence-rebrand-welcome-seen", "true")
  //   // Scroll to services section or navigate to services page
  //   const servicesSection = document.getElementById("services")
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

  if (hasSeenWelcome) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm lg:max-w-2xl p-0 gap-0 border-2 border-primary dark:borderprimary/50 shadow-lg">

        <VisuallyHidden><DialogTitle>Rebranding Announcement</DialogTitle></VisuallyHidden>

        {/* Header Section */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Floating Elements */}
          <div className="absolute top-4 right-16 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-4 left-8 w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse delay-1000" />

          <div className="relative p-8 pb-6 text-center">
            {/* Logo and Badge */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Logo quality={512} size={8} />
              {/* <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 text-sm font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                Rebranded
              </Badge> */}
            </div>

            {/* Welcome Message */}
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Welcome to the New<br />
              <span className="text-primary">
                Nascence Group
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              We've completely reimagined our digital presence with a fresh new look, enhanced functionality, and
              improved user experience to better serve our federal and commercial clients.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative px-8 pb-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                variant="default"
                className="cursor-pointer shadow-lg group"
              >
                <Link href="/feed" className="flex items-center" onClick={handleClose}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleClose}
                className="cursor-pointer border-gray-200 hover:border-gray-300"
              >
                Close
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Questions about our rebrand?{" "}
                <Link href="/faq" className="text-primary hover:text-primary/80 font-medium" onClick={handleClose}>
                  Visit our FAQ
                </Link>
              </p>
            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  )
}
