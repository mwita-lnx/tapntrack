"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Loader2,
  Save,
  Calendar,
  Clock,
  Upload,
  AlertCircle,
  Users,
  CreditCard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

export default function DataEntryPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Data saved successfully",
        description: "Your metrics have been recorded.",
      })
    }, 1500)
  }

  return (
    <div className="container max-w-screen-md py-6 md:py-12 relative">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70" />

      <div className="flex items-center gap-4 mb-8 relative">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="rounded-full border-primary/10 hover:bg-primary/5 hover:border-primary/20"
        >
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to dashboard</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Data Entry</h1>
          <p className="text-muted-foreground">Record your business metrics</p>
        </div>
      </div>

      <Tabs defaultValue="sales" className="space-y-6 relative">
        <TabsList className="grid w-full grid-cols-4 p-1 bg-muted/50 rounded-full">
          <TabsTrigger value="sales" className="rounded-full data-[state=active]:bg-background">
            Sales
          </TabsTrigger>
          <TabsTrigger value="inventory" className="rounded-full data-[state=active]:bg-background">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="customers" className="rounded-full data-[state=active]:bg-background">
            Customers
          </TabsTrigger>
          <TabsTrigger value="expenses" className="rounded-full data-[state=active]:bg-background">
            Expenses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales">
          <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Sales Data</CardTitle>
                  <CardDescription>Record your daily sales information</CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                  <Calendar className="h-3 w-3 mr-1" />
                  Daily Entry
                </Badge>
              </div>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        className="pl-10 border-primary/10 focus-visible:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="total-sales">Total Sales ($)</Label>
                    <Input
                      id="total-sales"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sales-category">Sales Category</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="sales-category" className="border-primary/10 focus-visible:ring-primary/20">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="category-a">Category A</SelectItem>
                      <SelectItem value="category-b">Category B</SelectItem>
                      <SelectItem value="category-c">Category C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="transactions">Number of Transactions</Label>
                    <Input
                      id="transactions"
                      type="number"
                      placeholder="0"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avg-sale">Average Sale Value ($)</Label>
                    <Input
                      id="avg-sale"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional information about today's sales"
                    className="min-h-[100px] border-primary/10 focus-visible:ring-primary/20"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="rounded-full border-primary/10 hover:bg-primary/5 hover:border-primary/20"
                >
                  Clear Form
                </Button>
                <Button type="submit" disabled={loading} className="rounded-full">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Data
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="inventory">
          <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Inventory Update</CardTitle>
                  <CardDescription>Record inventory levels and changes</CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                  <Clock className="h-3 w-3 mr-1" />
                  Real-time
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product">Product</Label>
                    <Select>
                      <SelectTrigger id="product" className="border-primary/10 focus-visible:ring-primary/20">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-a">Product A</SelectItem>
                        <SelectItem value="product-b">Product B</SelectItem>
                        <SelectItem value="product-c">Product C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Current Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="0"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="restock">Restock Level</Label>
                    <Input
                      id="restock"
                      type="number"
                      placeholder="0"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="value">Value per Unit ($)</Label>
                    <Input
                      id="value"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center p-6 border border-dashed border-primary/20 rounded-lg bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <Upload className="h-8 w-8 text-primary/60 mb-2" />
                    <p className="text-sm font-medium">Upload inventory spreadsheet</p>
                    <p className="text-xs text-muted-foreground mt-1">Drag and drop or click to browse</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="rounded-full">
                <Save className="mr-2 h-4 w-4" />
                Update Inventory
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Customer Metrics</CardTitle>
                  <CardDescription>Track customer activity and satisfaction</CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                  <Users className="h-3 w-3 mr-1" />
                  Customer Data
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-customers">New Customers</Label>
                    <Input
                      id="new-customers"
                      type="number"
                      placeholder="0"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="returning">Returning Customers</Label>
                    <Input
                      id="returning"
                      type="number"
                      placeholder="0"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="satisfaction">Customer Satisfaction</Label>
                  <Select>
                    <SelectTrigger id="satisfaction" className="border-primary/10 focus-visible:ring-primary/20">
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">Excellent (5/5)</SelectItem>
                      <SelectItem value="4">Good (4/5)</SelectItem>
                      <SelectItem value="3">Average (3/5)</SelectItem>
                      <SelectItem value="2">Below Average (2/5)</SelectItem>
                      <SelectItem value="1">Poor (1/5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Customer Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Record any customer feedback received"
                    className="min-h-[100px] border-primary/10 focus-visible:ring-primary/20"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="rounded-full">
                <Save className="mr-2 h-4 w-4" />
                Save Metrics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="expenses">
          <Card className="border-primary/5 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Expense Tracking</CardTitle>
                  <CardDescription>Record business expenses and categorize them</CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Financial
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expense-date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="expense-date"
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        className="pl-10 border-primary/10 focus-visible:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      className="border-primary/10 focus-visible:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Expense Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="border-primary/10 focus-visible:ring-primary/20">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inventory">Inventory Purchase</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="salaries">Salaries</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the expense"
                    className="min-h-[100px] border-primary/10 focus-visible:ring-primary/20"
                  />
                </div>

                <div className="flex items-center p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-xs">Remember to keep receipts for all business expenses for tax purposes.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="rounded-full">
                <Save className="mr-2 h-4 w-4" />
                Record Expense
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Offline Mode Available</h3>
            <p className="text-sm text-muted-foreground">Data will sync automatically when you're back online</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-primary/10 hover:bg-primary/10 hover:border-primary/20"
        >
          Learn More
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

