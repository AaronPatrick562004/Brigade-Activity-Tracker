// lib/brigade-eco-club-data.ts

// Types
export interface Project {
  id: string
  name: string
  district: string
  block: string
  type: "premium" | "luxury" | "township" | "mixed-use"
  coordinator: string
  residentVolunteers: number
  ecoClubFormed: boolean
  activitiesCompleted: number
  lastActivityDate: string
  rating: number
}

export interface Activity {
  id: string
  projectId: string
  projectName: string
  type: ActivityType
  title: string
  description: string
  date: string
  residentsParticipated: number
  photosCount: number
  status: "completed" | "upcoming" | "in-progress"
  report?: string
}

export type ActivityType =
  | "tree-plantation"
  | "waste-segregation"
  | "plastic-free"
  | "water-conservation"
  | "energy-saving"
  | "cleanliness-drive"
  | "biodiversity"
  | "nature-walk"
  | "environmental-day"
  | "composting"

export interface DistrictStats {
  district: string
  totalProjects: number
  activeEcoClubs: number
  activitiesThisMonth: number
  residentParticipation: number
}

export interface MonthlyProgress {
  month: string
  activities: number
  participation: number
}

// Activity type labels
export const activityTypeLabels: Record<ActivityType, string> = {
  "tree-plantation": "Tree Plantation & Nurturing",
  "waste-segregation": "Waste Segregation & Recycling",
  "plastic-free": "Plastic-Free Community",
  "water-conservation": "Water Conservation",
  "energy-saving": "Energy Saving Practices",
  "cleanliness-drive": "Cleanliness Drive",
  "biodiversity": "Biodiversity Awareness",
  "nature-walk": "Nature Walk / Eco-Trail",
  "environmental-day": "Environmental Day Celebration",
  "composting": "Composting / Kitchen Garden",
}

// Mock data for Brigade projects (residential societies)
export const brigadeProjects: Project[] = [
  {
    id: "BRG001",
    name: "Brigade Orchards",
    district: "Bengaluru North",
    block: "Devanahalli",
    type: "premium",
    coordinator: "Ms. Ananya Sharma",
    residentVolunteers: 245,
    ecoClubFormed: true,
    activitiesCompleted: 8,
    lastActivityDate: "2026-02-15",
    rating: 4.8,
  },
  {
    id: "BRG002",
    name: "Brigade Gateway",
    district: "Bengaluru Central",
    block: "Malleshwaram",
    type: "mixed-use",
    coordinator: "Mrs. Priya Menon",
    residentVolunteers: 400,
    ecoClubFormed: true,
    activitiesCompleted: 11,
    lastActivityDate: "2026-02-20",
    rating: 4.9,
  },
  {
    id: "BRG003",
    name: "Brigade Citrine",
    district: "Bengaluru East",
    block: "Whitefield",
    type: "luxury",
    coordinator: "Mr. Vikram Shetty",
    residentVolunteers: 176,
    ecoClubFormed: true,
    activitiesCompleted: 6,
    lastActivityDate: "2026-02-10",
    rating: 4.6,
  },
  {
    id: "BRG004",
    name: "Brigade Golden Triangle",
    district: "Bengaluru North",
    block: "Yelahanka",
    type: "township",
    coordinator: "Mrs. Smitha Rao",
    residentVolunteers: 232,
    ecoClubFormed: true,
    activitiesCompleted: 7,
    lastActivityDate: "2026-02-18",
    rating: 4.7,
  },
  {
    id: "BRG005",
    name: "Brigade Residences",
    district: "Bengaluru East",
    block: "Electronic City",
    type: "premium",
    coordinator: "Mr. Arun Kumar",
    residentVolunteers: 154,
    ecoClubFormed: true,
    activitiesCompleted: 5,
    lastActivityDate: "2026-01-28",
    rating: 4.5,
  },
  {
    id: "BRG006",
    name: "Brigade Exotica",
    district: "Bengaluru South",
    block: "Kanakapura Road",
    type: "luxury",
    coordinator: "Ms. Neha Gupta",
    residentVolunteers: 320,
    ecoClubFormed: true,
    activitiesCompleted: 9,
    lastActivityDate: "2026-02-22",
    rating: 4.9,
  },
  {
    id: "BRG007",
    name: "Brigade Metropolis",
    district: "Bengaluru North",
    block: "Hebbal",
    type: "mixed-use",
    coordinator: "Mr. Suresh Nair",
    residentVolunteers: 280,
    ecoClubFormed: true,
    activitiesCompleted: 7,
    lastActivityDate: "2026-02-25",
    rating: 4.7,
  },
]

// Mock activities for Brigade projects
export const brigadeActivities: Activity[] = [
  {
    id: "ACT001",
    projectId: "BRG001",
    projectName: "Brigade Orchards",
    type: "tree-plantation",
    title: "Van Mahotsav Tree Plantation Drive",
    description: "Planted 100 native trees across the residential community.",
    date: "2026-02-15",
    residentsParticipated: 150,
    photosCount: 25,
    status: "completed",
    report: "Successfully planted neem, banyan, and peepal trees in common areas.",
  },
  {
    id: "ACT002",
    projectId: "BRG002",
    projectName: "Brigade Gateway",
    type: "waste-segregation",
    title: "Zero Waste Initiative Launch",
    description: "Introduced color-coded bins and trained residents on waste segregation.",
    date: "2026-02-20",
    residentsParticipated: 400,
    photosCount: 18,
    status: "completed",
    report: "Achieved 60% waste segregation compliance in first month.",
  },
  {
    id: "ACT003",
    projectId: "BRG003",
    projectName: "Brigade Citrine",
    type: "water-conservation",
    title: "Rainwater Harvesting Workshop",
    description: "Conducted workshop on rainwater harvesting for residents.",
    date: "2026-02-10",
    residentsParticipated: 80,
    photosCount: 12,
    status: "completed",
  },
  {
    id: "ACT004",
    projectId: "BRG004",
    projectName: "Brigade Golden Triangle",
    type: "composting",
    title: "Community Composting Setup",
    description: "Set up composting unit for kitchen waste from 200+ households.",
    date: "2026-02-18",
    residentsParticipated: 120,
    photosCount: 15,
    status: "completed",
  },
  {
    id: "ACT005",
    projectId: "BRG006",
    projectName: "Brigade Exotica",
    type: "biodiversity",
    title: "Butterfly Garden Creation",
    description: "Created butterfly garden with native flowering plants.",
    date: "2026-02-22",
    residentsParticipated: 65,
    photosCount: 22,
    status: "completed",
  },
  {
    id: "ACT006",
    projectId: "BRG001",
    projectName: "Brigade Orchards",
    type: "environmental-day",
    title: "World Water Day Celebration",
    description: "Inter-community competitions for water conservation awareness.",
    date: "2026-03-22",
    residentsParticipated: 0,
    photosCount: 0,
    status: "upcoming",
  },
  {
    id: "ACT007",
    projectId: "BRG005",
    projectName: "Brigade Residences",
    type: "plastic-free",
    title: "Plastic-Free Community Drive",
    description: "Campaign to eliminate single-use plastic in the community.",
    date: "2026-03-05",
    residentsParticipated: 0,
    photosCount: 0,
    status: "upcoming",
  },
]

// District stats for Brigade projects
export const brigadeDistrictStats: DistrictStats[] = [
  { district: "Bengaluru North", totalProjects: 45, activeEcoClubs: 42, activitiesThisMonth: 28, residentParticipation: 8500 },
  { district: "Bengaluru East", totalProjects: 38, activeEcoClubs: 35, activitiesThisMonth: 22, residentParticipation: 7200 },
  { district: "Bengaluru South", totalProjects: 32, activeEcoClubs: 29, activitiesThisMonth: 18, residentParticipation: 5800 },
  { district: "Bengaluru Central", totalProjects: 27, activeEcoClubs: 22, activitiesThisMonth: 18, residentParticipation: 6950 },
]

// Monthly progress for Brigade
export const brigadeMonthlyProgress: MonthlyProgress[] = [
  { month: "Sep 2025", activities: 42, participation: 12400 },
  { month: "Oct 2025", activities: 58, participation: 17200 },
  { month: "Nov 2025", activities: 45, participation: 14800 },
  { month: "Dec 2025", activities: 32, participation: 10200 },
  { month: "Jan 2026", activities: 68, participation: 21400 },
  { month: "Feb 2026", activities: 86, participation: 28450 },
]

// Get total stats for Brigade
export function getBrigadeTotalStats() {
  const totalProjects = brigadeDistrictStats.reduce((sum, d) => sum + d.totalProjects, 0)
  const activeClubs = brigadeDistrictStats.reduce((sum, d) => sum + d.activeEcoClubs, 0)
  const totalActivities = brigadeDistrictStats.reduce((sum, d) => sum + d.activitiesThisMonth, 0)
  const totalParticipation = brigadeDistrictStats.reduce((sum, d) => sum + d.residentParticipation, 0)
  return { totalProjects, activeClubs, totalActivities, totalParticipation }
}

// Helper function to get a project by ID
export function getBrigadeProjectById(id: string) {
  return brigadeProjects.find(project => project.id === id)
}

// Helper function to get activities for a project
export function getBrigadeActivitiesByProjectId(projectId: string) {
  return brigadeActivities.filter(activity => activity.projectId === projectId)
}

// Helper function to get stats for a specific project
export function getBrigadeProjectStats(projectId: string) {
  const project = getBrigadeProjectById(projectId)
  const activities = getBrigadeActivitiesByProjectId(projectId)
  const completedActivities = activities.filter(a => a.status === "completed")
  
  return {
    project,
    totalActivities: activities.length,
    completedActivities: completedActivities.length,
    upcomingActivities: activities.filter(a => a.status === "upcoming").length,
    totalParticipants: completedActivities.reduce((sum, a) => sum + a.residentsParticipated, 0),
  }
}