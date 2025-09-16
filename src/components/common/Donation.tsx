// import Image from "next/image";

import { ChartPieSimple } from "../common/PieChart";
import { ChartConfig } from "../ui/chart";

export default function Donation() {
    const chartData: { fill: string; title: string; percentage: number; }[] = [
        { fill: "#78bce8", title: "child care home", percentage: 40 },
        { fill: "#c662bb", title: "cleanliness program", percentage: 25 },
        { fill: "#debd59", title: "helping people", percentage: 20 },
        { fill: "#45b56d", title: "excursions", percentage: 15 },
    ];
    const chartConfig = {
        title: {
            label: "Donation Distribution",
        },
        "direct child support": {
            label: "Direct Child Support",
            color: "var(--chart-1)",
        },
        "counseling & education": {
            label: "Counseling & Education",
            color: "var(--chart-2)",
        },
        "advocacy & legal aid": {
            label: "Advocacy & Legal Aid",
            color: "var(--chart-3)",
        },
        "operations & sustainability": {
            label: "Operations & Sustainability",
            color: "var(--chart-5)",
        },
    } satisfies ChartConfig;

    return (
        <section className="bg-gray-black mx-auto mb-12 md:mb-20 px-4 2xl:px-0 w-full max-w-[120rem] text-gray-white">
            <div className="flex flex-wrap justify-between mx-auto py-20 w-full max-w-7xl">
                <div className="w-full max-w-[634px]">
                    <h2 className="font-bold text-4xl md:text-5xl leading-[120%]">How we spend your donations and where it goes</h2>
                    <p className="text-gray-500 mt-4 md:mt-6 leading-[160%]">We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
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