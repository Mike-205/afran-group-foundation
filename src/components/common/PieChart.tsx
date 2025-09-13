"use client"

import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function ChartPieSimple({chartData, chartConfig}: {chartData: { fill: string; title: string; percentage: number; }[], chartConfig: ChartConfig}) {
  return (
        <ChartContainer
          config={chartConfig}
          className="w-full h-full aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="percentage" nameKey="title" />
          </PieChart>
        </ChartContainer>
  )
}
