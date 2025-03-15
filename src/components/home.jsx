import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Building2, Hammer, ShoppingBag, Flame, CheckCircle, Menu, X, Tractor, ShirtIcon, Store } from "lucide-react";

// Assuming you have equivalent components in your React project
// or you can create simplified versions of these UI components
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Activity className="h-6 w-6 text-amber-600" />
            <span className="tracking-tight text-zinc-800">Tap & Track</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-zinc-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors">
              Features
            </a>
            <a href="#services" className="text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/wrapp-it-up">Get Started</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
            <div className="flex flex-col p-4 space-y-3">
              <a 
                href="#features" 
                className="py-2 text-zinc-800 hover:text-amber-600 border-b border-zinc-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#services" 
                className="py-2 text-zinc-800 hover:text-amber-600 border-b border-zinc-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="py-2 text-zinc-800 hover:text-amber-600 border-b border-zinc-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="py-2 text-zinc-800 hover:text-amber-600 border-b border-zinc-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-2">
                <Link to="/wrapp-it-up">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-20 bg-zinc-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern-forge bg-repeat"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center">              
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Empower Your <span className="text-amber-500">Jua Kali</span> Business
              </h1>
              
              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-zinc-300">
                Simple, powerful tracking tools for blacksmiths, Wakulima, Kiosks and Mtumbas. 
                Monitor orders, inventory, and productivity with just a tap.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md shadow-lg">
                  <Link to="/wrapp-it-up" className="flex items-center">
                    Start Tracking Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-700 py-3 px-6 rounded-md">
                  <Link to="/wrapp-it-up">Watch Demo</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 md:mt-16 relative mx-auto max-w-5xl">
              <div className="rounded-lg shadow-2xl overflow-hidden border border-zinc-700">
               
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                Made for Kenyan Small Businesses
              </h2>
              <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
                Tools designed specifically for the unique needs of local entrepreneurs
              </p>
            </div>

            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
              <Card className="bg-white border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 border-b border-zinc-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium text-zinc-800">Blacksmith Tools</CardTitle>
                    <Hammer className="h-5 w-5 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">Forge Analytics</h3>
                  <p className="text-zinc-600">
                    Track metal usage, tool maintenance, production time, and order fulfillment all in one place.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-amber-200 text-amber-700 hover:bg-amber-50"
                  >
                    <Link to="/blacksmith-dashboard">Explore Tools</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 border-b border-zinc-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium text-zinc-800">Farm Management</CardTitle>
                    <Tractor className="h-5 w-5 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">Wakulima Tools</h3>
                  <p className="text-zinc-600">
                    Manage crop cycles, track harvests, monitor weather impact, and optimize your farm's productivity.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-amber-200 text-amber-700 hover:bg-amber-50"
                  >
                    <Link to="/farm-metrics">Explore Tools</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 border-b border-zinc-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium text-zinc-800">Mitumba Business</CardTitle>
                    <ShirtIcon className="h-5 w-5 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">Clothing Sales</h3>
                  <p className="text-zinc-600">
                    Track inventory bales, manage seasonal items, track best sellers, and optimize your clothing business.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-amber-200 text-amber-700 hover:bg-amber-50"
                  >
                    <Link to="/mitumba-dashboard">Explore Tools</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 border-b border-zinc-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium text-zinc-800">Kiosk Management</CardTitle>
                    <Store className="h-5 w-5 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-zinc-800 mb-2">Retail Tools</h3>
                  <p className="text-zinc-600">
                    Manage daily sales, track fast-moving products, monitor stock levels, and boost your kiosk profitability.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-amber-200 text-amber-700 hover:bg-amber-50"
                  >
                    <Link to="/kiosk-dashboard">Explore Tools</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 text-center mb-4">
                Simple tools for busy entrepreneurs
              </h2>
              <p className="text-center text-zinc-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
                Spend more time growing your business and less time with paperwork
              </p>

              <div className="grid gap-y-8 gap-x-12 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg text-zinc-800 mb-2">Works Offline</h3>
                  <p className="text-zinc-600">
                    No internet? No problem. Track your work even without connection and sync later.
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg text-zinc-800 mb-2">Simple Design</h3>
                  <p className="text-zinc-600">
                    Easy-to-use interface designed for real business owners. Tap and go.
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg text-zinc-800 mb-2">Picture Support</h3>
                  <p className="text-zinc-600">
                    Take photos of your products and attach them to inventory for better tracking.
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg text-zinc-800 mb-2">Cost Calculations</h3>
                  <p className="text-zinc-600">
                    Automatically calculate profit margins and costs for each product or service.
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg text-zinc-800 mb-2">SMS Notifications</h3>
                  <p className="text-zinc-600">
                    Send order updates via SMS to customers without needing smartphones.
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-lg text-zinc-800 mb-2">Voice Input</h3>
                  <p className="text-zinc-600">
                    Hands busy? Use voice commands to log sales and update inventory easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-md p-8 md:p-12 border border-amber-100">
              <div className="text-center md:text-left md:flex md:items-center md:gap-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                 
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
                    Made by Jua Kali for Jua Kali
                  </h2>
                  <p className="text-zinc-600 mb-6">
                    Tap & Track was built by a team of Jua Kali entrepreneurs who understand the challenges of running a small business in Kenya.
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md w-full md:w-auto">
                    <Link to="/wrapp-it-up" className="flex items-center justify-center">
                      Our Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-zinc-800 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-zinc-300 mb-8 text-base md:text-lg">
                Join hundreds of Kenyan entrepreneurs already using Tap & Track to manage their business and increase profits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md w-full sm:w-auto">
                  <Link to="/wrapp-it-up" className="flex items-center justify-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-700 py-3 px-6 rounded-md w-full sm:w-auto">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 font-bold text-lg">
                <Activity className="h-5 w-5 text-amber-500" />
                <span>Tap & Track</span>
              </div>
              <p className="text-zinc-400 mt-2">
                Simple business tools for Kenyan entrepreneurs and small businesses.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Our Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blacksmith-dashboard" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Blacksmith Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/farm-metrics" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Farm Metrics
                  </Link>
                </li>
                <li>
                  <Link to="/mitumba-dashboard" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Mitumba Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/kiosk-dashboard" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Kiosk Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Help Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Video Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <Link to="/wrapp-it-up" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    All-in-One Solution
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-zinc-500">© 2025 Tap & Track. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm text-zinc-500">
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;