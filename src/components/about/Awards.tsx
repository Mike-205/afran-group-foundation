import Image from "next/image";

export default function Awards() {
    const awards: { title: string; year: string; location: string; imageUrl: string }[] = [
        { title: "Best NGO Award", year: "2021", location: "BERLIN, GERMANY", imageUrl: "/assets/icons/award-badge-1.svg" },
        { title: "Global Award", year: "2018", location: "NEW YORK, USA", imageUrl: "/assets/icons/award-badge-2.svg" },
        { title: "CSN Award", year: "2014", location: "NEW DELHI, INDIA", imageUrl: "/assets/icons/award-badge-3.svg" },
        { title: "NGO of the year Award", year: "2010", location: "VIENNA, AUSTRIA", imageUrl: "/assets/icons/award-badge-4.svg" }
    ];

    return (
        <section className="mt-20 mb-16">
            <h2 className="mb-12 font-bold text-5xl text-center leading-[120%]">Awards & Recognitions</h2>
            <div className="flex justify-between mx-auto w-full max-w-[1114px]">
                {awards.map((award, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1">
                        <Image src={award.imageUrl} alt={award.title} width={112} height={92} />
                        <h3 className="mt-2 font-bold text-primary-text text-2xl text-center leading-[160%]">{award.year}</h3>
                        <p className="font-bold text-primary-text text-center leading-[160%]">{award.title}</p>
                        <p className="font-medium text-primary-text text-xs text-center leading-[160%]">{award.location}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}