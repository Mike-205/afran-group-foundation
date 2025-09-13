import Image from "next/image";
import { Button } from "../common/buttons";

export default function AboutUs() {
    const supporters: { name: string; logo: string }[] = [
        { name: "Supporter 1", logo: "/icons/logo-1.svg" },
        { name: "Supporter 2", logo: "/icons/logo-2.svg" },
        { name: "Supporter 3", logo: "/icons/logo-3.svg" },
        { name: "Supporter 4", logo: "/icons/logo-4.svg" },
        { name: "Supporter 5", logo: "/icons/logo-5.svg" },
        { name: "Supporter 6", logo: "/icons/logo-6.svg" }
    ];

    return (
        <section className="flex flex-wrap justify-between mx-auto px-4 2xl:px-0 py-8 w-full max-w-7xl">
            <div className="flex lg:flex-row flex-col w-full">
                <div className="my-8 lg:my-12 w-full max-w-[704px]">
                    <div className="flex items-center gap-2 md:gap-4 mb-5">
                        <span className="bg-black rounded-full w-16 md:w-[72px] h-[2px]"></span>
                        <h2 className="font-bold">KNOW ABOUT US</h2>
                    </div>
                    <div className="flex flex-col justify-end gap-4 ml-8 md:ml-[88px]">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-[120%]">We make sure to provide inclusive care for children</h1>
                        <div className="space-y-4">
                            <p className="text-sm lg:text-base leading-[160%]">Breaking the cycle of abuse through advocacy, education, and unwavering support for survivors across Kenya and Africa</p>
                            <p className="text-sm lg:text-base leading-[160%]">To create a safe world for all children by preventing child abuse, empowering survivors, and advocating for systemic change that protects the most vulnerable in our communities.</p>
                        </div>
                        <Button variant={"link"} className="bg-yellow-dark mt-4 px-8 py-4 w-fit font-medium text-black hover:text-black hover:cursor-pointer">Learn More</Button>
                    </div>
                </div>
                <div className="flex justify-center mx-auto px-4 2xl:px-0 w-full max-w-[480px]">
                    <Image src={"/images/home-about.jpg"} alt="team celebrating in the open" width={480} height={578} className="rounded-3xl object-cover" />
                </div>
            </div>
            
            <div className="mx-auto mt-8 min-w-full max-w-7xl">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="min-w-fit font-medium">OUR SUPPORTERS</h2>
                    <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 lg:gap-8">
                    {supporters.map((supporter) => (
                        <Image key={supporter.name} src={supporter.logo} alt={supporter.name} width={142} height={28} />
                    ))}
                </div>
            </div>
        </section>
    )
}