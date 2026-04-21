"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, LogIn, User, Shield } from "lucide-react"

export default function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<"resident" | "officer">("resident")
  const [isLoading, setIsLoading] = useState(false)

  // Set user type based on URL parameter
  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "officer") {
      setUserType("officer")
    } else if (type === "resident") {
      setUserType("resident")
    }
  }, [searchParams])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      if (userType === "resident") {
        router.push("/brigade-dashboard")
      } else {
        router.push("/admin")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Building2 className="h-7 w-7 text-green-700" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Brigade Eco-Club
            </CardTitle>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to access your dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Account Type</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType("resident")}
                    className={`flex flex-col items-center gap-2 rounded-lg border p-3 transition-all ${
                      userType === "resident"
                        ? "border-green-600 bg-green-50 ring-2 ring-green-600/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <User className={`h-5 w-5 ${userType === "resident" ? "text-green-700" : "text-gray-500"}`} />
                    <span className={`text-sm font-medium ${userType === "resident" ? "text-green-700" : "text-gray-700"}`}>
                      Projects
                    </span>
                    <span className="text-[10px] text-gray-500">Project Dashboard</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("officer")}
                    className={`flex flex-col items-center gap-2 rounded-lg border p-3 transition-all ${
                      userType === "officer"
                        ? "border-green-600 bg-green-50 ring-2 ring-green-600/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Shield className={`h-5 w-5 ${userType === "officer" ? "text-green-700" : "text-gray-500"}`} />
                    <span className={`text-sm font-medium ${userType === "officer" ? "text-green-700" : "text-gray-700"}`}>
                      Officer
                    </span>
                    <span className="text-[10px] text-gray-500">Admin Dashboard</span>
                  </button>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={userType === "resident" ? "resident@brigade.com" : "officer@brigade.gov.in"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10"
                />
              </div>

              {/* Demo Info */}
              <div className="rounded-lg bg-blue-50 p-3 text-xs text-blue-800">
                <p className="font-medium mb-1">Demo Credentials:</p>
                <p>Any email & password works for testing</p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 h-10"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing in...
                  </div>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In as {userType === "resident" ? "Resident" : "Officer"}
                  </>
                )}
              </Button>
            </form>

            {/* Quick Access Links */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500 mb-3">Quick Access (Skip Login)</p>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-green-700 border-green-200 hover:bg-green-50"
                  onClick={() => router.push("/brigade-dashboard")}
                >
                  Resident Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-green-700 border-green-200 hover:bg-green-50"
                  onClick={() => router.push("/admin")}
                >
                  Officer Demo
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
