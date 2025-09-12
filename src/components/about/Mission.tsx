import Image from "next/image";

export default function Mission() {
    const supporters: { name: string; logo: string }[] = [
        { name: "Supporter 1", logo: "/assets/icons/logo-1.svg" },
        { name: "Supporter 2", logo: "/assets/icons/logo-2.svg" },
        { name: "Supporter 3", logo: "/assets/icons/logo-3.svg" },
        { name: "Supporter 4", logo: "/assets/icons/logo-4.svg" },
        { name: "Supporter 5", logo: "/assets/icons/logo-5.svg" },
        { name: "Supporter 6", logo: "/assets/icons/logo-6.svg" }
    ]
    return (
        <section className="bg-yellow-light px-4 2xl:px-0 pt-[128px] lg:pt-[224px]">
            <div className="flex lg:flex-row flex-col justify-between gap-8 mx-auto mt-10 lg:mt-20 w-full max-w-[1088px]">
                <div className="max-w-[496px]">
                    <h2 className="mb-3 font-bold">OUR MISSION</h2>
                    <h3 className="font-bold text-2xl leading-[150%]">We make sure to provide inclusive care for children with special needs</h3>
                    <p className="mt-3 leading-[160%]">To create a safe world for all children by preventing child abuse, empowering survivors, and advocating for systemic change that protects the most vulnerable in our communities.</p>
                </div>
                <div className="max-w-[496px]">
                    <h2 className="mb-3 font-bold">OUR VISION</h2>
                    <h3 className="font-bold text-2xl leading-[150%]">Provide more inclusive care to children around the world</h3>
                    <p className="mt-3 leading-[160%]">A future where every child grows up free from abuse, with access to safety, dignity, and the support they need to heal, thrive, and reach their full potential.</p>
                </div>
            </div>
            <div className="mx-auto py-20 max-w-7xl">
                <h2 className="mb-8 font-medium">OUR SUPPORTERS</h2>
                <div className="flex flex-wrap justify-between gap-4 lg:gap-8">
                    {supporters.map((supporter) => (
                        <Image key={supporter.name} src={supporter.logo} alt={supporter.name} width={142} height={28} />
                    ))}
                </div>
            </div>
        </section>
    )
}