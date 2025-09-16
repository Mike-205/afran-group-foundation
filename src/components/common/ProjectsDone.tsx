import { projects } from "@/lib/data/projects";
import { Button } from "./buttons";
import Image from "next/image";

export default function ProjectsDone() {
    return (
        <section className="mx-auto px-6 md:px-8 2xl:px-0 py-16 md:py-20 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <span className="bg-secondary-300 rounded-full w-16 md:w-[72px] h-[2px]"></span>
                    <h2 className="text-secondary-400 text-base font-semibold">PROJECTS DONE</h2>
                </div>
                <h1 className="mb-10 md:mb-16 ml-6 md:ml-[88px] max-w-[704px] font-bold text-2xl md:text-4xl lg:text-5xl leading-[120%]">We are creating a place where all children can thrive</h1>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full justify-center">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="relative rounded-3xl w-full lg:w-1/3 h-[420px] overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={411}
                                height={420}
                                className="rounded-3xl w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-3xl"></div>
                            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-10">
                                <h3 className="font-bold text-xl md:text-2xl lg:text-[28px] leading-[130%] text-white">{project.title}</h3>
                                <p className="mt-4 md:mt-6 text-sm md:text-base leading-[160%] text-white">{project.description}</p>
                                <Button
                                    variant={"link"}
                                    className="bg-white mt-8 px-6 md:px-8 py-3 md:py-4 rounded-lg w-fit font-medium text-black hover:text-black hover:cursor-pointer transition-colors"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}