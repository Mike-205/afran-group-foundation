import Image from "next/image";

export default function Journey() {
    const milestones: { quantity: string; label: string }[] = [
        { quantity: "15,000+", label: "Children Protected" },
        { quantity: "500+", label: "Families Supported" },
        { quantity: "50+", label: "Communities Reached" },
        { quantity: "25", label: "Policy Changes" },
    ]

    const description: string = "The AFRAN Group Foundation was born out of a deep concern for children who suffer in silence - those facing violence, neglect, and exploitation within their homes and communities. What started as a small initiative to respond to hidden cries for help has grown into a registered non-profit organization with a national and regional impact."
    const description2: string = "Guided by Kenya’s Children Act (2022) and international child rights frameworks, we have built a movement that combines direct care for survivors with systemic advocacy for long-term change. Along the way, we have partnered with communities, governments, and civil society to create safe spaces, provide legal and psychosocial support, and influence policies that protect children."
    return (
        <section className="flex flex-wrap-reverse lg:flex-nowrap items-center gap-8 bg-primary-300 mx-auto py-12 pr-4 lg:pr-8 pl-6 lg:pl-20 rounded-[20px] w-full max-w-7xl">
            <div className="w-full max-w-[488px]">
                <h2 className="text-gray-black font-semibold">OUR JOURNEY</h2>
                <h1 className="text-gray-black my-2 lg:my-4 font-bold text-3xl lg:text-4xl leading-[120%]">This is our Story</h1>
                <p className="text-primary-800 text-sm lg:text-base leading-[160%]">{description}<br />{description2}</p>
                <div className="flex flex-wrap gap-8 mt-8 w-full">
                    {milestones.map((milestone, index) => (
                        <div key={index}>
                            <p className="font-medium text-2xl leading-[160%]">{milestone.quantity}</p>
                            <p className="font-medium text-xs leading-[160%]">{milestone.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Image src={"/images/image-11.jpg"} alt="Our Team" width={512} height={448} className="rounded-3xl w-full max-w-[612px] max-h-[448px]" />
        </section>
    )
}