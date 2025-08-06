import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react"
import { ThemeToggler } from "@/components/theme-toggler"
import { siteConfig } from "@/lib/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TN</span>
              </div>
              <span className="text-lg font-bold">The Nascence Group</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Exceptional support services for federal & commercial clients. Your trusted partner for comprehensive
              facility and technology solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Janitorial Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Grounds Maintenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Facilities Maintenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  IT & Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Health Staffing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Security Staffing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="text-slate-300 hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">{siteConfig.address.city} (HQ)</p>
                  <p className="text-slate-400">{siteConfig.address.street}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <p className="text-slate-300">{siteConfig.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <p className="text-slate-300">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© {currentYear} The Nascence Group. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
