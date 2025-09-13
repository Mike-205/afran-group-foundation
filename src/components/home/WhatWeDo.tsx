import Image from "next/image";
import { GraduationCap, Megaphone, Shield } from "lucide-react";

export default function WhatWeDo() {
    const services: { title: string; description: string; image: string }[] = [
        { title: "PROTECT", description: "Direct intervention and safe spaces for children at risk, providing immediate protection and long-term security.", image: "/icons/home-what-we-do-1.svg" },
        { title: "ADVOCATE", description: "Policy change and legal reform to create systemic protections and ensure justice for child abuse survivors.", image: "/icons/home-what-we-do-2.svg" },
        { title: "EMPOWER", description: "Community education and family support to build strong foundations for child protection and family stability.", image: "/icons/home-what-we-do-3.svg" },
    ]

    return (
        <section className="bg-yellow-light mx-auto mb-8 px-4 2xl:px-0 py-8 w-full max-w-[120rem]">
            <div className="flex lg:flex-row flex-col mx-auto w-full max-w-7xl">
                <div className="my-8 lg:my-12 w-full max-w-[704px]">
                    <div className="flex items-center gap-2 md:gap-4 mb-5">
                        <span className="bg-black rounded-full w-16 md:w-[72px] h-[2px]"></span>
                        <h2 className="font-bold">WHAT WE DO</h2>
                    </div>
                    <div className="flex flex-col justify-end gap-4 ml-8 md:ml-[88px]">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-[120%]">Some services we provide for our children</h1>
                        <div>
                            <p className="text-sm lg:text-base leading-[160%]">Breaking the cycle of abuse through advocacy, education, and unwavering support for survivors across Kenya and Africa</p>
                        </div>
                        <div className="space-y-4">
                            {services.map((service) => (
                                <div key={service.title} className="flex items-start gap-4">
                                    <div className="flex flex-shrink-0 justify-center items-center bg-white rounded-full w-12 md:w-16 h-12 md:h-16">
                                        {service.title === "PROTECT" && <Shield width={48} height={48} className="w-6 md:w-8 h-6 md:h-8" />}
                                        {service.title === "ADVOCATE" && <Megaphone width={48} height={48} className="w-6 md:w-8 h-6 md:h-8" />}
                                        {service.title === "EMPOWER" && <GraduationCap width={48} height={48} className="w-6 md:w-8 h-6 md:h-8" />}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg md:text-xl">{service.title}</h3>
                                        <p className="text-sm lg:text-base leading-[160%]">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-auto px-4 2xl:px-0 w-full max-w-[480px]">
                    <Image src={"/images/home-what-we-do.jpg"} alt="team celebrating in the open" width={480} height={658} className="rounded-3xl object-cover" />
                </div>
            </div>
        </section>
    )
}