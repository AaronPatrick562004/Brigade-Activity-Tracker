"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Building2 } from "lucide-react"

export function Footer() {
  const [imageError, setImageError] = useState(false)

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Column 1: Logo & Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col items-start group">
              {!imageError ? (
                <>
                  <div className="relative h-12 w-auto">
                    <Image
                      src="/images/brigade-logo.jpg"
                      alt="Brigade Group Logo"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-contain"
                      onError={() => setImageError(true)}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1.5">Activity Tracker</span>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                      <Building2 className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="font-mono text-base font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      Brigade Activity Tracker
                    </span>
                  </div>
                </>
              )}
            </Link>
            
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A Brigade Group initiative under Sustainable Living to track and promote environmental activities in residential communities.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-600">
                  World Trade Center, Bengaluru 560 055<br />Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                <a href="mailto:sustainability@brigadegroup.com" className="text-base text-gray-600 hover:text-green-700 transition">
                  sustainability@brigadegroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/brigade-dashboard" className="text-base text-gray-600 hover:text-green-700 transition">
                  Project Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-base text-gray-600 hover:text-green-700 transition">
                  Admin Monitor
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-base text-gray-600 hover:text-green-700 transition">
                  Reports & Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-green-700 transition">
                  Brigade Sustainability Framework
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-green-700 transition">
                  Activity Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-green-700 transition">
                  Brigade Sustainability Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="text-base text-gray-600">
                Brigade Group - Sustainability Wing
              </li>
              <li className="text-base text-gray-600">
                World Trade Center, Bengaluru 560 055
              </li>
              <li className="text-base text-gray-600">
                Karnataka, India
              </li>
              <li className="text-base">
                <a href="mailto:sustainability@brigadegroup.com" className="text-gray-600 hover:text-green-700 transition">
                  sustainability@brigadegroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-base text-gray-500">
            Brigade Group - Sustainability Initiative. Supporting sustainable communities.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} Brigade Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}