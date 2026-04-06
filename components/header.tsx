"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-3 md:px-8">
          {/* Logo - No green background */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-gray-50">
              {!imageError ? (
                <div className="relative h-full w-full">
                  <Image
                    src="/images/brigade-logo.jpg"
                    alt="Brigade Group Logo"
                    fill
                    className="object-cover p-1"
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <Building2 className="h-6 w-6 md:h-7 md:w-7 text-gray-600" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm md:text-base font-bold leading-tight text-gray-900 group-hover:text-green-700 transition-colors">
                Brigade Activity Tracker
              </span>
              <span className="text-[8px] md:text-[10px] leading-tight text-gray-500">
                Sustainable Living | Brigade Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-green-700"
            >
              Home
            </Link>
            <Link
              href="/brigade-dashboard"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-green-700"
            >
              Dashboard
            </Link>
            <Link
              href="/admin"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-green-700"
            >
              Admin
            </Link>
            <Link
              href="/reports"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-green-700"
            >
              Reports
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login?type=resident">Project Login</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900" asChild>
              <Link href="/login?type=officer">Officer Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 md:hidden">
          <div className="bg-white shadow-xl border-b border-gray-200 animate-in slide-in-from-top duration-200">
            <div className="px-4 py-3">
              <nav className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/brigade-dashboard"
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin"
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </Link>
                <Link
                  href="/reports"
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Reports
                </Link>
              </nav>

              <div className="mt-3 flex flex-col gap-2">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  asChild
                >
                  <Link href="/login?type=resident" onClick={() => setMenuOpen(false)}>
                    Project Login
                  </Link>
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900" 
                  asChild
                >
                  <Link href="/login?type=officer" onClick={() => setMenuOpen(false)}>
                    Officer Login
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div 
            className="fixed inset-0 -z-10 bg-black/30"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </>
  )
}