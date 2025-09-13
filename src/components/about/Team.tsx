import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function Team() {
    const teamMembers: { name: string; role: string; imageUrl: string }[] = [
        { name: "Ellen Walton", role: "Cofounder, CEO", imageUrl: "/images/team-1.jpg" },
        { name: "Leonard John Davies", role: "Chief Operating Officer", imageUrl: "/images/team-2.jpg" },
        { name: "Francis Weber", role: "Director of Programs", imageUrl: "/images/team-3.jpg" },
        { name: "Kyla Obrien", role: "Head of Communications", imageUrl: "/images/team-4.jpg" },
        { name: "Adrian Dixon", role: "Lead Social Worker", imageUrl: "/images/team-5.jpg" },
        { name: "Freddy Busby", role: "Community Outreach Coordinator", imageUrl: "/images/team-6.jpg" },
        { name: "Dale Banks", role: "Fundraising Manager", imageUrl: "/images/team-7.jpg"}, 
        { name: "Miriam Middleton", role: "Policy Advocate", imageUrl: "/images/team-8.jpg"}
    ];

    return (
        <section className="mx-auto my-10 lg:my-20 w-full max-w-7xl">
            <h2 className="font-bold text-primary-text text-3xl lg:text-5xl text-center leading-[120%]">Meet our team</h2>
            <div className="hidden lg:flex flex-wrap justify-center gap-8 mt-8">
                {teamMembers.map((member, index) => (
                    <div key={index}>
                        <Image src={member.imageUrl} alt={member.name} width={296} height={320} className="rounded-3xl" />
                        <h3 className="font-medium text-primary-text text-xl text-center leading-[160%]">{member.name}</h3>
                        <p className="font-medium text-primary-text text-xs text-center leading-[160%]">{member.role}</p>
                        <div className="flex justify-center gap-4 mt-2">
                            {["/icons/facebook.svg", "/icons/twitter.svg", "/icons/linkedin.svg"].map((icon, idx) => (
                                <Image key={idx} src={icon} alt="social icon" width={20} height={20} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="lg:hidden relative px-4">
                <Carousel className="mt-8 w-full">
                    <CarouselContent className="">
                        {teamMembers.map((member, index) => (
                            <CarouselItem key={index} className="w-full max-w-[296px] md:basis-1/2">
                                <Image src={member.imageUrl} alt={member.name} width={296} height={320} className="rounded-3xl w-full max-w-[296px]" />
                                <h3 className="font-medium text-primary-text text-xl text-center leading-[160%]">{member.name}</h3>
                                <p className="font-medium text-primary-text text-xs text-center leading-[160%]">{member.role}</p>
                                <div className="flex justify-center gap-4 mt-2">
                                    {["/icons/facebook.svg", "/icons/twitter.svg", "/icons/linkedin.svg"].map((icon, idx) => (
                                        <Image key={idx} src={icon} alt="social icon" width={20} height={20} />
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