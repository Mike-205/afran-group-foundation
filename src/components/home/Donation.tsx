// import Image from "next/image";

import { ChartPieSimple } from "../common/PieChart";
import { ChartConfig } from "../ui/chart";

export default function Donation() {
    const chartData: { fill: string; title: string; percentage: number; }[] = [
        { fill: "#BEF3C0", title: "child care home", percentage: 40 },
        { fill: "#AC94F1", title: "cleanliness program", percentage: 35 },
        { fill: "#F38FBF", title: "helping people", percentage: 10 },
        { fill: "#F9CF64", title: "excursions", percentage: 10 },
        { fill: "#FFF0CA", title: "feeding the poor", percentage: 5 },
    ];
    const chartConfig = {
        title: {
            label: "Donation Distribution",
        },
        "child care home": {
            label: "Child Care Home",
            color: "var(--chart-1)",
        },
        "cleanliness program": {
            label: "Cleanliness Program",
            color: "var(--chart-2)",
        },
        "helping people": {
            label: "Helping People",
            color: "var(--chart-3)",
        },
        excursions: {
            label: "Excursions",
            color: "var(--chart-4)",
        },
        "feeding the poor": {
            label: "Feeding the Poor",
            color: "var(--chart-5)",
        },
    } satisfies ChartConfig;

    return (
        <section className="bg-black mx-auto mb-12 md:mb-20 px-4 2xl:px-0 w-full max-w-[120rem] text-gray-white">
            <div className="flex flex-wrap justify-between mx-auto py-20 w-full max-w-7xl">
                <div className="w-full max-w-[634px]">
                    <h2 className="font-bold text-4xl md:text-5xl leading-[120%]">How we spend your donations and where it goes</h2>
                    <p className="opacity-60 mt-4 md:mt-6 leading-[160%]">We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
                    <div className="flex flex-wrap gap-2 space-x-4 mt-4 md:mt-6">
                        {chartData.map((data) => (
                            <div key={data.title} className="flex items-center gap-2 w-full sm:w-fit">
                                <div className="flex-shrink-0 rounded-[4px]" style={{ backgroundColor: data.fill, width: '16px', height: '16px' }}></div>
                                <p className="font-medium text-base leading-[160%]">{data.percentage}% {data.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-[375px]">
                    <ChartPieSimple chartData={chartData} chartConfig={chartConfig} />
                </div>
            </div>
        </section>
    )
}