"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 2780 },
  { month: "May", revenue: 1890 },
  { month: "Jun", revenue: 2390 },
  { month: "Jul", revenue: 3490 },
  { month: "Aug", revenue: 4000 },
  { month: "Sep", revenue: 3300 },
  { month: "Oct", revenue: 2500 },
  { month: "Nov", revenue: 3300 },
  { month: "Dec", revenue: 4500 },
]

export function RevenueChart() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Revenue",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-revenue)" opacity={0.1} />
          <XAxis dataKey="month" stroke="var(--color-revenue)" opacity={0.5} />
          <YAxis stroke="var(--color-revenue)" opacity={0.5} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={2}
            fill="url(#colorRevenue)"
            fillOpacity={1}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

