import Image from "next/image";
import { BookOpen, Heart, Shield, Users } from "lucide-react";

export default function WhatWeDo() {
    const services = [
        {
            title: "Advocacy & Policy Engagement",
            description: "We influence child protection policies, host dialogues, and engage leaders to create stronger systems that safeguard children.",
            icon: <Users className="w-5 text-gray-white md:w-6 h-5 md:h-6" />
        },
        {
            title: "Psychosocial Support",
            description: "Through trauma-informed counseling, therapy, and wellness centers, we help children and families heal and rebuild.",
            icon: <Heart className="w-5 text-gray-white md:w-6 h-5 md:h-6" />
        },
        {
            title: "Legal Aid & Justice",
            description: "In partnership with lawyers and legal aid groups, we offer support through legal processes and fight for accountability.",
            icon: <Shield className="w-5 text-gray-white md:w-6 h-5 md:h-6" />
        },
        {
            title: "Child Protection Clubs",
            description: "We run awareness campaigns, school clubs, and workshops that empower communities to prevent and respond to child abuse.",
            icon: <BookOpen className="w-5 text-gray-white md:w-6 h-5 md:h-6" />
        },
    ];

    return (
        <section className="bg-primary-100 mx-auto mb-12 px-6 md:px-8 2xl:px-0 py-12 md:py-16 w-full max-w-[120rem]">
            <div className="flex lg:flex-row flex-col mx-auto w-full max-w-7xl lg:gap-12">
                <div className="my-4 lg:my-8 w-full max-w-[704px]">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <span className="bg-secondary-300 rounded-full w-16 md:w-[72px] h-[2px]"></span>
                        <h2 className="text-secondary-400 text-base font-semibold">WHAT WE DO</h2>
                    </div>
                    <div className="flex flex-col justify-end gap-5 md:gap-6 ml-6 md:ml-[88px]">
                        <h1 className="font-bold text-gray-black text-2xl md:text-4xl lg:text-5xl leading-[120%]">Some services we provide for our children</h1>
                        <div>
                            <p className="text-base lg:text-lg leading-[160%] text-gray-700">We use a holistic approach to child protection—meeting immediate needs while addressing root causes of abuse.</p>
                        </div>
                        <div className="space-y-8 md:space-y-10 mt-4 md:mt-6 lg:ml-8">
                            {services.map((service) => (
                                <div key={service.title} className="flex items-start gap-5 md:gap-6">
                                    <div className="flex flex-shrink-0 justify-center items-center bg-primary-300 rounded-lg w-12 md:w-14 h-12 md:h-14">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-black text-lg md:text-xl mb-2">{service.title}</h3>
                                        <p className="text-sm lg:text-base leading-[160%] text-gray-700">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:justify-end mx-auto px-4 2xl:px-0 w-full max-w-[480px] mt-6 lg:mt-8">
                    <Image src={"/images/image-1.jpg"} alt="team celebrating in the open" width={480} height={658} className="rounded-3xl lg:w-full lg:h-5/6 object-cover" />
                </div>
            </div>
        </section>
    );
}