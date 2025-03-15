"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Product A", value: 4000 },
  { name: "Product B", value: 3000 },
  { name: "Product C", value: 2000 },
  { name: "Product D", value: 2780 },
  { name: "Product E", value: 1890 },
]

export function InventoryChart() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Inventory Value",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-value)" opacity={0.1} />
          <XAxis dataKey="name" stroke="var(--color-value)" opacity={0.5} />
          <YAxis stroke="var(--color-value)" opacity={0.5} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="url(#colorValue)" radius={[4, 4, 0, 0]} barSize={30} animationDuration={1500} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

