"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { brigadeMonthlyProgress, brigadeDistrictStats } from "@/lib/brigade-eco-club-data"

const activityDistribution = [
  { name: "Tree Plantation", value: 48, fill: "#2e7d32" },
  { name: "Waste Segregation", value: 35, fill: "#388e3c" },
  { name: "Water Conservation", value: 28, fill: "#43a047" },
  { name: "Cleanliness Drive", value: 25, fill: "#4caf50" },
  { name: "Others", value: 42, fill: "#66bb6a" },
]

export function MonthlyProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Monthly Activity Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={brigadeMonthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="activities"
                stroke="#2e7d32"
                strokeWidth={2}
                dot={{ fill: "#2e7d32", r: 4 }}
                name="Activities"
              />
              <Line
                type="monotone"
                dataKey="participation"
                stroke="#66bb6a"
                strokeWidth={2}
                dot={{ fill: "#66bb6a", r: 4 }}
                name="Resident Participation"
                yAxisId="right"
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function DistrictComparisonChart() {
  const chartData = brigadeDistrictStats.map((d) => ({
    district: d.district,
    activeClubs: d.activeEcoClubs,
    activities: d.activitiesThisMonth,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">District-wise Active Eco-Clubs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="district"
                tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend />
              <Bar dataKey="activeClubs" fill="#2e7d32" name="Active Eco-Clubs" radius={[4, 4, 0, 0]} />
              <Bar dataKey="activities" fill="#66bb6a" name="Activities/Month" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function ActivityTypeDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Activity Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={activityDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              >
                {activityDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend
                formatter={(value) => (
                  <span style={{ fontSize: "12px", color: "var(--color-foreground)" }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function StudentParticipationChart() {
  const chartData = brigadeDistrictStats.map((d) => ({
    district: d.district,
    residents: d.residentParticipation,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Resident Participation by District</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                type="number"
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                dataKey="district"
                type="category"
                tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="residents" fill="#43a047" name="Residents" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}