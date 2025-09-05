import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, Facebook, MapPinPlusInside } from "lucide-react"
import { ThemeToggler } from "@/components/theme-toggler"
import { siteConfig } from "@/lib/site"
import Logo from "../logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-900 text-black dark:text-white border-t border-slate-300 dark:border-slate-800 pt-8 text-center lg:text-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Logo quality={50} size={6} />
              <span className="text-lg font-bold">Nascence Group, LLC</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Nascence Group, a Minority Woman-Owned, 8A and HubZone Certified business, is committed to providing exceptional services to federal and corporate clients.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                className="border rounded text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                href={siteConfig.links.linkedin}
                target="_blank"
              >
                <Linkedin className="w-5 h-5 mt-2 mx-2" />
              </Link>
              <Link
                className="border rounded text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                href={siteConfig.links.facebook}
                target="_blank"
              >
                <Facebook className="w-5 h-5 mt-2 mx-2" />
              </Link>
              <ThemeToggler />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Janitorial Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Grounds Maintenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Facilities Maintenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  IT & Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Health Staffing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
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
                <Link href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start justify-center lg:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 dark:text-slate-300">{siteConfig.address.main.street}</p>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.address.main.city} (HQ)</p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-2">
                <MapPinPlusInside className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 dark:text-slate-300">{siteConfig.address.branch.street}</p>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.address.branch.city} (Branch)</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Link href={`tel:${siteConfig.contact.phone}`} className="flex items-center space-x-2 hover:underline">
                  <Phone className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <p className="text-slate-600 dark:text-slate-300">{siteConfig.contact.phone}</p>
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Link href={`mailto:${siteConfig.contact.email}`} className="flex items-center space-x-2 hover:underline">
                  <Mail className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <p className="text-slate-600 dark:text-slate-300">{siteConfig.contact.email}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-300 dark:border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 dark:text-slate-400 text-sm">© {currentYear} Nascence Group, LLC. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              {/* <ThemeToggler /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
