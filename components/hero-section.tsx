"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Building2, Users, CalendarDays } from "lucide-react"
import { getBrigadeTotalStats } from "@/lib/brigade-eco-club-data"

export function HeroSection() {
  const stats = getBrigadeTotalStats()

  // Both buttons - White background, Green text
  const whiteButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'white',
    color: '#15803d',
    fontWeight: 500,
    borderRadius: '9999px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  }

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-eco.jpg"
          alt="Residents participating in eco-club activities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm px-4 py-1.5 text-sm text-white">
            <Leaf className="h-4 w-4" />
            <span>Brigade Group | Sustainable Living Initiative</span>
          </div>

          <h1 className="text-balance font-mono text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Brigade Activity Tracker
          </h1>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/90 lg:text-xl">
            A comprehensive digital platform for Brigade Group to monitor, track, and celebrate Eco-Club 
            activities across all residential communities.
          </p>

          {/* Both buttons - White background, Green text */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/brigade-dashboard"
              style={whiteButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              Project Dashboard
              <ArrowRight style={{ height: '1rem', width: '1rem' }} />
            </Link>
            <Link
              href="/admin"
              style={whiteButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              Admin Monitor
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Building2, label: "Projects Registered", value: stats.totalProjects.toLocaleString() },
              { icon: Leaf, label: "Active Eco-Clubs", value: stats.activeClubs.toLocaleString() },
              { icon: CalendarDays, label: "Activities This Month", value: stats.totalActivities.toLocaleString() },
              { icon: Users, label: "Residents Engaged", value: stats.totalParticipation.toLocaleString() },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/30 bg-black/20 backdrop-blur-sm p-3 sm:p-4 transition-all hover:bg-black/30"
              >
                <stat.icon className="mb-2 h-4 w-4 sm:h-5 sm:w-5 text-white/90" />
                <p className="font-mono text-lg sm:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] sm:text-xs text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}