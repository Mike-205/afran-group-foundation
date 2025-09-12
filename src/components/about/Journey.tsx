import Image from "next/image";

export default function Journey() {
    const milestones: { quantity: string; label: string }[] = [
        { quantity: "15,000+", label: "Children Protected" },
        { quantity: "500+", label: "Families Supported" },
        { quantity: "50+", label: "Communities Reached" },
        { quantity: "25", label: "Policy Changes" },
    ]
    return (
        <section className="flex items-center gap-8 bg-yellow-dark mx-auto py-12 pr-8 pl-20 rounded-[20px] w-full max-w-7xl">
            <div className="max-w-[488px]">
                <h2 className="font-bold">OUR JOURNEY</h2>
                <h1 className="my-4 font-bold text-5xl leading-[120%]">This is our Story</h1>
                <p className="leading-[160%]">Founded in response to the alarming rates of child abuse across Kenya and East Africa, our foundation emerged from a collective determination to break the silence surrounding these critical issues. What started as a small group of advocates has grown into a comprehensive support network spanning multiple countries. Our work is driven by survivors, supported by communities, and guided by the belief that every child deserves protection. Through innovative programs, policy advocacy, and grassroots organizing, we&lsquo;ve built a movement that transforms lives and systems. Today, we continue to expand our reach, deepen our impact, and work tirelessly toward a future where child abuse is not just responded to, but prevented entirely.</p>
                <div className="flex gap-8 mt-8">
                    {milestones.map((milestone, index) => (
                        <div key={index}>
                            <p className="font-medium text-2xl leading-[160%]">{milestone.quantity}</p>
                            <p className="font-medium text-xs leading-[160%]">{milestone.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Image src={"/assets/images/journey.jpg"} alt="Our Team" width={612} height={448} className="rounded-3xl max-w-[612px] max-h-[448px]" />
        </section>
    )
}