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
        <section className="mx-auto px-6 md:px-8 2xl:px-0 py-16 md:py-20 w-full max-w-[120rem]">
            <div className="flex lg:flex-row flex-col w-full max-w-7xl mx-auto gap-10 lg:gap-16">
                <div className="my-4 lg:my-8 w-full max-w-[704px]">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <span className="bg-secondary-300 rounded-full w-16 md:w-[72px] h-[2px]"></span>
                        <h2 className="text-secondary-400 text-base font-semibold">KNOW ABOUT US</h2>
                    </div>
                    <div className="flex flex-col justify-end gap-5 md:gap-6 ml-6 md:ml-[88px]">
                        <h1 className="text-gray-black font-bold text-2xl md:text-4xl lg:text-5xl leading-[120%]">We make sure to provide inclusive care for children</h1>
                        <div className="space-y-5 md:space-y-6 mt-2">
                            <p className="text-sm lg:text-base leading-[160%] text-gray-700">The Afran Group Foundation is a registered non-profit based in Nairobi, Kenya, dedicated to protecting and empowering children who face violence, abuse, neglect, and exploitation. We were founded to break the silence surrounding child abuse and to ensure no child suffers in isolation.</p>
                            <p className="text-sm lg:text-base leading-[160%] text-gray-700">Our work is guided by Kenya&lsquo;s Children Act (2022), the UN Convention on the Rights of the Child, and regional human rights instruments. By combining direct care with systemic advocacy, we strengthen child protection systems in Kenya and across Africa.</p>
                        </div>
                        <Button variant={"link"} className="bg-yellow-dark mt-8 md:mt-6 px-8 py-4 w-fit font-medium text-black hover:text-black hover:cursor-pointer">Learn More</Button>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:justify-end mx-auto px-4 2xl:px-0 w-full max-w-[480px] mt-6 lg:mt-0">
                    <Image src={"/images/home-about.jpg"} alt="team celebrating in the open" width={480} height={578} className="rounded-3xl object-cover shadow-md" />
                </div>
            </div>

            <div className="mx-auto mt-16 md:mt-24 w-full max-w-7xl">
                <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
                    <h2 className="min-w-fit font-medium text-gray-900">OUR SUPPORTERS</h2>
                    <div className="bg-gray-100 w-full h-[1px]"></div>
                </div>
                <div className="flex flex-wrap justify-between gap-8 md:gap-10 lg:gap-12">
                    {supporters.map((supporter) => (
                        <Image key={supporter.name} src={supporter.logo} alt={supporter.name} width={142} height={28} className="opacity-80 hover:opacity-100 transition-opacity" />
                    ))}
                </div>
            </div>
        </section>
    )
}