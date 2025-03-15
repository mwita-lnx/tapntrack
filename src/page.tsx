import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Building2, TractorIcon as Farm, ShoppingBag, Utensils, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>LocalMetrics</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="rounded-full px-4">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70" />

          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center relative">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Simple metrics for local businesses
            </div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Track what matters
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 md:text-2xl">
              Affordable, easy-to-use metrics tracking designed specifically for farms, shops, restaurants, and service
              businesses.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Button size="lg" asChild className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                <Link href="/signup">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full border-primary/20 hover:bg-primary/5">
                <Link href="/demo">View demo</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-24 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent h-40 -bottom-1 z-10"></div>
            <div className="mx-auto max-w-5xl rounded-t-2xl border shadow-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                width={1200}
                height={800}
                alt="Dashboard preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none" />

          <div className="mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Tailored for your business</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the module that fits your specific business needs
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
            <Card className="relative overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Farm Module</CardTitle>
                <Farm className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Agricultural Metrics</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Track crop yields, livestock data, equipment usage, and weather impact on your farm operations.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30"
                  asChild
                >
                  <Link href="/modules/farm">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Retail Module</CardTitle>
                <ShoppingBag className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Shop Metrics</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Track sales, inventory, customer traffic, bestsellers, and optimize your retail business performance.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30"
                  asChild
                >
                  <Link href="/modules/retail">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Restaurant Module</CardTitle>
                <Utensils className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Food Service Metrics</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Track table turnover, food costs, popular dishes, peak hours, and optimize your restaurant operations.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30"
                  asChild
                >
                  <Link href="/modules/restaurant">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Service Module</CardTitle>
                <Building2 className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Service Business Metrics</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Track appointments, service times, customer satisfaction, and optimize your service business.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30"
                  asChild
                >
                  <Link href="/modules/service">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />

          <div className="mx-auto grid max-w-[58rem] gap-4">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-center">
              Designed for simplicity
            </h2>
            <p className="text-center text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto">
              Focus on running your business, not learning complex software
            </p>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Multi-Platform Access</h3>
                <p className="mt-2 text-muted-foreground">
                  Access your metrics from web, mobile app, or even via SMS for areas with limited connectivity.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Offline Capability</h3>
                <p className="mt-2 text-muted-foreground">
                  Record data even without internet connection - it will sync when connectivity is restored.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Visual Dashboards</h3>
                <p className="mt-2 text-muted-foreground">
                  Intuitive visualizations make it easy to understand your business performance at a glance.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Comparative Analysis</h3>
                <p className="mt-2 text-muted-foreground">
                  Compare this year vs. last year, this season vs. last season to identify trends.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Assisted Insights</h3>
                <p className="mt-2 text-muted-foreground">
                  Get recommendations and insights based on your data to help improve your business.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-4 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Affordable Pricing</h3>
                <p className="mt-2 text-muted-foreground">
                  Tiered pricing model with a free tier for micro-businesses and pay-as-you-grow options.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-12 lg:p-16 backdrop-blur-sm border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

            <div className="relative">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-center mb-6">
                Ready to grow your business?
              </h2>
              <p className="text-center text-muted-foreground sm:text-xl max-w-2xl mx-auto mb-8">
                Join thousands of local businesses already using LocalMetrics to track their performance and make
                data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  <Link href="/signup">
                    Start your free trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full border-primary/20 hover:bg-primary/5 w-full sm:w-auto"
                >
                  <Link href="/pricing">View pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16 bg-muted/30">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>LocalMetrics</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Simple, affordable metrics tracking for local businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 LocalMetrics. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

