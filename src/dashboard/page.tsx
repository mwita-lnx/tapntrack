"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  CreditCard,
  Download,
  TractorIcon as Farm,
  Home,
  LineChart,
  Menu,
  Package,
  PieChart,
  Settings,
  ShoppingBag,
  Users,
  Bell,
  Search,
  ChevronDown,
  HelpCircle,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { RevenueChart } from "./revenue-chart"
import { InventoryChart } from "./inventory-chart"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar className="hidden lg:block border-r border-primary/5">
          <SidebarHeader className="flex h-14 items-center border-b border-primary/5 px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span>LocalMetrics</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full bg-muted pl-8 text-sm" />
              </div>
            </div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
                  <Link href="#">
                    <Home className="h-4 w-4" />
                    <span>Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "sales"} onClick={() => setActiveTab("sales")}>
                  <Link href="#">
                    <LineChart className="h-4 w-4" />
                    <span>Sales</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={activeTab === "inventory"}
                  onClick={() => setActiveTab("inventory")}
                >
                  <Link href="#">
                    <Package className="h-4 w-4" />
                    <span>Inventory</span>
                    <Badge variant="outline" className="ml-auto">
                      New
                    </Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={activeTab === "customers"}
                  onClick={() => setActiveTab("customers")}
                >
                  <Link href="#">
                    <Users className="h-4 w-4" />
                    <span>Customers</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "calendar"} onClick={() => setActiveTab("calendar")}>
                  <Link href="#">
                    <Calendar className="h-4 w-4" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-primary/5">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <HelpCircle className="h-4 w-4" />
                    <span>Help & Support</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-primary/5 bg-background/95 backdrop-blur-sm px-6 lg:h-[60px]">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="lg:hidden">
                <div className="flex h-14 items-center border-b px-2">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <span>LocalMetrics</span>
                  </Link>
                </div>
                <nav className="grid gap-2 text-lg font-medium mt-4">
                  <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary transition-colors">
                    <Home className="h-4 w-4" />
                    Overview
                  </Link>
                  <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary transition-colors">
                    <LineChart className="h-4 w-4" />
                    Sales
                  </Link>
                  <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary transition-colors">
                    <Package className="h-4 w-4" />
                    Inventory
                  </Link>
                  <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary transition-colors">
                    <Users className="h-4 w-4" />
                    Customers
                  </Link>
                  <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary transition-colors">
                    <Calendar className="h-4 w-4" />
                    Calendar
                  </Link>
                  <Link href="#" className="flex items-center gap-2 py-2 hover:text-primary transition-colors">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-primary/10 hover:bg-primary/5 hover:border-primary/20"
                  >
                    <ShoppingBag className="h-4 w-4 text-primary" />
                    <span className="hidden md:inline-flex">Retail Shop</span>
                    <span className="sr-only">Select business type</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Switch business type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Farm className="mr-2 h-4 w-4 text-primary" />
                    <span>Farm</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShoppingBag className="mr-2 h-4 w-4 text-primary" />
                    <span>Retail Shop</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    <span>Service Business</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  3
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 rounded-full border-primary/10 hover:bg-primary/5 hover:border-primary/20"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline-flex">Export</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      width={32}
                      height={32}
                      alt="User avatar"
                      className="rounded-full object-cover"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-muted/5">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
              <Button variant="ghost" size="sm" className="ml-auto gap-1 text-primary">
                <Zap className="h-4 w-4" />
                <span>Quick Actions</span>
              </Button>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-muted/50 p-1">
                <TabsTrigger value="overview" className="rounded-full data-[state=active]:bg-background">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-full data-[state=active]:bg-background">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" className="rounded-full data-[state=active]:bg-background">
                  Reports
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-green-500 font-medium bg-green-500/10 px-1.5 py-0.5 rounded-full">
                          +20.1%
                        </span>
                        <span className="text-xs text-muted-foreground ml-1.5">from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Sales</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <LineChart className="h-4 w-4 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-green-500 font-medium bg-green-500/10 px-1.5 py-0.5 rounded-full">
                          +19%
                        </span>
                        <span className="text-xs text-muted-foreground ml-1.5">from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-green-500 font-medium bg-green-500/10 px-1.5 py-0.5 rounded-full">
                          +201
                        </span>
                        <span className="text-xs text-muted-foreground ml-1.5">since last week</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Package className="h-4 w-4 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$12,234.89</div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-green-500 font-medium bg-green-500/10 px-1.5 py-0.5 rounded-full">
                          +$2,345
                        </span>
                        <span className="text-xs text-muted-foreground ml-1.5">since last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle>Revenue Over Time</CardTitle>
                      <CardDescription>Monthly revenue for the current year</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <RevenueChart />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle>Inventory Status</CardTitle>
                      <CardDescription>Top 5 products by inventory value</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <InventoryChart />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>You made 265 sales this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div className="flex items-center" key={i}>
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">Customer #{i}</p>
                              <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</p>
                            </div>
                            <div className="ml-auto font-medium">${(Math.random() * 100).toFixed(2)}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="ml-auto rounded-full" variant="outline">
                        View All
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="col-span-3 border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle>Sales by Category</CardTitle>
                      <CardDescription>Distribution of sales across product categories</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center py-8">
                      <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-primary/20">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-primary/40">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-primary">
                            <PieChart className="h-12 w-12 text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-between gap-2">
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span className="text-xs">Category A (45%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-primary/40"></div>
                        <span className="text-xs">Category B (30%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-primary/20"></div>
                        <span className="text-xs">Category C (25%)</span>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <Card className="border-primary/5 bg-background/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Advanced Analytics</CardTitle>
                    <CardDescription>Detailed analysis of your business performance</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mt-4 text-lg font-medium">Analytics Module</h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md">
                        Upgrade to the Pro plan to access advanced analytics features including predictive trends and
                        AI-powered recommendations.
                      </p>
                      <Button className="mt-4 rounded-full px-8">Upgrade to Pro</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <Card className="border-primary/5 bg-background/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Generate and download business reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Card className="border-primary/10 hover:border-primary/20 hover:shadow-sm transition-all">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Monthly Sales Report</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-xs text-muted-foreground">
                            Comprehensive breakdown of sales by product, category, and time.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm" variant="outline" className="w-full rounded-full">
                            <Download className="mr-2 h-4 w-4" />
                            Generate
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="border-primary/10 hover:border-primary/20 hover:shadow-sm transition-all">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Inventory Status Report</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-xs text-muted-foreground">
                            Current inventory levels, value, and turnover rates.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm" variant="outline" className="w-full rounded-full">
                            <Download className="mr-2 h-4 w-4" />
                            Generate
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card className="border-primary/10 hover:border-primary/20 hover:shadow-sm transition-all">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Customer Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-xs text-muted-foreground">
                            Customer demographics, purchase patterns, and retention metrics.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm" variant="outline" className="w-full rounded-full">
                            <Download className="mr-2 h-4 w-4" />
                            Generate
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

