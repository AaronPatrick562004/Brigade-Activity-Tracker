import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  MonthlyProgressChart,
  DistrictComparisonChart,
  ActivityTypeDistribution,
  StudentParticipationChart,
} from "@/components/analytics-charts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Award,
  Star,
  Download,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBrigadeTotalStats, brigadeProjects } from "@/lib/brigade-eco-club-data"

export default function ReportsPage() {
  const stats = getBrigadeTotalStats()
  const topProjects = [...brigadeProjects]
    .filter((p) => p.ecoClubFormed)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-mono text-2xl font-bold text-gray-900">
                Reports
              </h1>
              <p className="text-sm text-gray-600">
                Comprehensive analytics for Brigade Eco-Club activities across residential communities
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a 
                href="/downloads/implementation-guide.pdf" 
                download="Brigade-Eco-Club-Report.pdf"
              >
                <FileText className="h-4 w-4" />
                Generate Report
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a 
                href="/downloads/brigade-eco-club-data.csv" 
                download="Brigade-Eco-Club-Data-Export.csv"
              >
                <Download className="h-4 w-4" />
                Export Data
              </a>
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Card className="border-green-700/20 bg-green-700/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-700" />
                <span className="text-xs font-medium text-green-700">Growth Rate</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">+18%</p>
              <p className="mt-1 text-xs text-gray-500">Eco-club adoption this quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-xs">Avg Activities/Project</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">
                {(stats.totalActivities / stats.activeClubs * 12).toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-gray-500">Per year projection</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-xs">Avg Residents/Activity</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">
                {Math.round(stats.totalParticipation / stats.totalActivities)}
              </p>
              <p className="mt-1 text-xs text-gray-500">Across all districts</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-xs">Corporate Coverage</span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-gray-900">
                {Math.round((stats.activeClubs / stats.totalProjects) * 100)}%
              </p>
              <p className="mt-1 text-xs text-gray-500">Projects with active eco-clubs</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <MonthlyProgressChart />
          <DistrictComparisonChart />
        </div>

        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <ActivityTypeDistribution />
          <StudentParticipationChart />
        </div>

        {/* Top Performing Projects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-green-700" />
              Top Performing Eco-Clubs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-600">
              Residential communities recognized for outstanding eco-club activities as per Brigade's monitoring criteria
            </p>
            <div className="grid gap-3 md:grid-cols-5">
              {topProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-mono text-lg font-bold text-green-700">
                    {index + 1}
                  </div>
                  <h4 className="text-sm font-medium leading-tight text-gray-900">
                    {project.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-green-700" />
                    <span className="font-mono text-sm font-semibold text-gray-900">
                      {project.rating}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.activitiesCompleted} activities
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Summary */}
        <Card className="border-green-700/20 bg-green-700/5">
          <CardContent className="py-8">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-mono text-xl font-bold text-gray-900">
                Impact Summary
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                This digital tracking platform enables real-time monitoring of {stats.activeClubs.toLocaleString()} active eco-clubs
                across {stats.totalProjects.toLocaleString()} residential projects under Brigade Group, engaging {stats.totalParticipation.toLocaleString()} residents
                in environmental activities every month. The platform provides transparent, data-driven insights to help
                community managers and regional heads ensure compliance with Brigade's sustainability framework
                and recognize outstanding eco-club initiatives.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button className="gap-2 bg-green-700 hover:bg-green-800" asChild>
                  <a 
                    href="/downloads/implementation-guide.pdf" 
                    download="Brigade-Eco-Club-Full-Report.pdf"
                  >
                    <FileText className="h-4 w-4" />
                    Download Full Report
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a 
                    href="/downloads/brigade-eco-club-data.csv" 
                    download="Brigade-Eco-Club-Data-Export.csv"
                  >
                    <Download className="h-4 w-4" />
                    Export as CSV
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
