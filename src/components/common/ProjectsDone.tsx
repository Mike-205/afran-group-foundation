import { projects } from "@/lib/data/projects";
import { Button } from "./buttons";
import Image from "next/image";

export default function ProjectsDone() {
    return (
        <section className="mx-auto my-12 lg:my-20 mb-16 px-4 2xl:px-0 w-full max-w-7xl">
            <div className="flex items-center gap-2 md:gap-4 mb-5">
                <span className="bg-black rounded-full w-16 md:w-[72px] h-[2px]"></span>
                <h2 className="font-bold">PROJECTS WE HAVE DONE</h2>
            </div>
            <h1 className="mb-8 md:mb-16 ml-8 md:ml-[88px] max-w-[640px] font-bold text-2xl lg:text-5xl leading-[120%]">We are creating a place where all children can thrive</h1>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
                {projects.map((service) => (
                    <div key={service.title} className="relative rounded-3xl w-[411px] max-w-[411px] h-[421px] max-h-[421px] overflow-clip text-white">
                        <Image src={service.image} alt={service.title} width={411} height={300} className="rounded-3xl w-full h-full object-cover" />
                        <div className="top-0 left-0 z-10 absolute bg-[#0B0706] opacity-60 rounded-3xl w-full max-w-[411px] h-full"></div>
                        <div className="top-0 left-0 z-20 absolute flex flex-col px-8 pt-12 pb-10 w-full h-full">
                            <h3 className="font-bold md:text-[28px] text-2xl leading-[150%]">{service.title}</h3>
                            <p className="mt-6 text-sm lg:text-base leading-[160%]">{service.description}</p>
                            <Button variant={"link"} className="bg-gray-white mt-auto mb-0 px-8 py-4 rounded-lg w-fit font-medium text-black hover:text-black hover:cursor-pointer">Learn more</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}