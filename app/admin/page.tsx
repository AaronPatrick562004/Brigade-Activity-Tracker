import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DistrictTable } from "@/components/district-table"
import { SchoolListTable } from "@/components/school-list-table"
import { ActivityList } from "@/components/activity-list"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Building2,
  Leaf,
  CalendarCheck,
  Users,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import { getBrigadeTotalStats, brigadeProjects } from "@/lib/brigade-eco-club-data"

export default function AdminDashboardPage() {
  const stats = getBrigadeTotalStats()
  const inactiveProjects = brigadeProjects.filter((p) => !p.ecoClubFormed).length
  const coveragePercent = Math.round((stats.activeClubs / stats.totalProjects) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto px-4 py-4 sm:px-6 md:px-8 lg:max-w-7xl">
        {/* Admin Header */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-700">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">
                Admin
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Corporate-level overview of Brigade Eco-Club implementation across residential communities
              </p>
            </div>
          </div>
          <Badge variant="outline" className="w-fit gap-1 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-700" />
            Live Monitoring
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <Card>
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
                <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs">Total Projects</span>
              </div>
              <p className="mt-1 text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                {stats.totalProjects.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
                <Leaf className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs">Active Clubs</span>
              </div>
              <p className="mt-1 text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                {stats.activeClubs.toLocaleString()}
              </p>
              <p className="mt-0.5 text-[10px] sm:text-xs text-green-700">{coveragePercent}% coverage</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
                <CalendarCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs">Activities/Mo</span>
              </div>
              <p className="mt-1 text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                {stats.totalActivities.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs">Residents</span>
              </div>
              <p className="mt-1 text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                {stats.totalParticipation.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-destructive">
                <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs">Inactive Clubs</span>
              </div>
              <p className="mt-1 text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                {inactiveProjects}
              </p>
              <p className="mt-0.5 text-[10px] sm:text-xs text-destructive">Needs attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Trend Indicator */}
        <Card className="mb-4 sm:mb-6 md:mb-8">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-700" />
                <span className="text-xs sm:text-sm font-medium text-gray-900">Monthly Trend</span>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                <span className="text-gray-600">
                  Activities: <span className="font-semibold text-green-700">+12.6%</span>
                </span>
                <span className="text-gray-600">
                  Participation: <span className="font-semibold text-green-700">+18.5%</span>
                </span>
                <span className="text-gray-600">
                  New clubs: <span className="font-semibold text-green-700">+12</span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* District Table */}
        <div className="mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
          <DistrictTable />
        </div>

        {/* Project Table & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="lg:col-span-2 overflow-x-auto">
            <SchoolListTable />
          </div>
          <div>
            <ActivityList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
