import Image from "next/image";

export default function ForKids() {
    const supports: {name: string; description: string; icon: string}[] = [
        { name: "Family Support", description: "Providing emotional and financial support to families affected by child abuse.", icon: "/icons/for-kids-1.svg" },
        { name: "Health Benefits", description: "Offering health benefits to children who have experienced abuse, ensuring their physical and mental well-being.", icon: "/icons/for-kids-2.svg" },
        { name: "Education" , description: "Ensuring access to quality education for children, empowering them to build a brighter future.", icon: "/icons/for-kids-3.svg" },
        { name: "Basic Amenities", description: "Providing basic amenities such as food, clothing, and shelter to children in need.", icon: "/icons/for-kids-4.svg" },
        { name: "Therapy", description: "Offering therapy and counseling services to help children heal from trauma and abuse.", icon: "/icons/for-kids-5.svg" },
        { name: "Public Outreach", description: "Conducting public outreach programs to raise awareness about child abuse and its prevention.", icon: "/icons/for-kids-6.svg" }
    ];

    return (
        <section className="bg-yellow-light mx-auto px-4 2xl:px-0 py-12 md:py-20 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-7xl">
                <h2 className="font-bold text-primary-text text-3xl md:text-5xl leading-[120%]">What we do for our kids</h2>
                <div className="flex flex-wrap justify-between gap-4 mt-8 ml-8 md:ml-0">
                    {supports.map((support, index) => (
                        <div key={index} className="flex items-start gap-4 w-full max-w-[384px]">
                            <Image src={support.icon} alt={`${support.name} icon`} width={28} height={28} className="object-contain" />
                            <div>
                                <h3 className="font-bold text-primary-text text-2xl">{support.name}</h3>
                                <p className="text-secondary-text text-xs md:text-sm leading-[160%]">{support.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}