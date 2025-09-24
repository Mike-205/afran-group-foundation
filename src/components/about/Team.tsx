import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function Team() {
    const teamMembers: { name: string; role: string; imageUrl: string }[] = [
        { name: "Wangari Muthoni", role: "Cofounder, CEO", imageUrl: "/images/team-1.jpg" },
        { name: "Mwangi Kariuki", role: "Chief Operating Officer", imageUrl: "/images/team-6.jpg" },
        { name: "Njeri Kamau", role: "Director of Programs", imageUrl: "/images/team-3.jpg" },
        { name: "Kibet Kosgei", role: "Head of Communications", imageUrl: "/images/team-5.jpg" },
        { name: "Amina Ochieng", role: "Community Outreach Coordinator", imageUrl: "/images/team-2.jpg" },
        { name: "Fatima Ahmed", role: "Lead Social Worker", imageUrl: "/images/team-4.jpg" },
        { name: "Otieno Odhiambo", role: "Fundraising Manager", imageUrl: "/images/team-7.jpg"},
        { name: "Mwai Githinji", role: "Policy Advocate", imageUrl: "/images/team-8.jpg"}
    ];

    return (
        <section className="mx-auto my-10 lg:my-20 w-full max-w-7xl">
            <h2 className="font-bold text-gray-black text-3xl lg:text-5xl text-center leading-[120%]">Meet our team</h2>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 px-4 md:px-6 lg:px-0">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-full aspect-square max-w-[280px] md:max-w-[290px] lg:max-w-[296px] relative overflow-hidden rounded-2xl shadow-sm shadow-gray-600/10 transition-all duration-300 group-hover:shadow-md">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="font-medium text-gray-black text-lg md:text-xl text-center leading-[160%] mt-3">{member.name}</h3>
                        <p className="font-medium text-gray-700 text-xs md:text-sm text-center leading-[160%]">{member.role}</p>
                        <div className="flex justify-center gap-3 md:gap-4 mt-2">
                            {["/icons/facebook.svg", "/icons/twitter.svg", "/icons/linkedin.svg"].map((icon, idx) => (
                                <div key={idx} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <Image src={icon} alt="social icon" width={18} height={18} className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:hidden relative px-4">
                <Carousel className="mt-8 w-full">
                    <CarouselContent className="">
                        {teamMembers.map((member, index) => (
                            <CarouselItem key={index} className="w-full max-w-[320px] md:basis-1/2">
                                <div className="w-full max-w-[296px] h-[320px] relative overflow-hidden rounded-3xl">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-medium text-primary-text text-xl text-center leading-[160%]">{member.name}</h3>
                                <p className="font-medium text-primary-text text-xs text-center leading-[160%]">{member.role}</p>
                                <div className="flex justify-center gap-4 mt-2">
                                    {["/icons/facebook.svg", "/icons/twitter.svg", "/icons/linkedin.svg"].map((icon, idx) => (
                                        <Image key={idx} src={icon} alt="social icon" width={20} height={20}  />
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
        </section>
    )
}