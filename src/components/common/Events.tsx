import Image from "next/image";

export default function Events() {
    const events: { title: string; day: number; month: string; }[] = [
        { title: "A day with our wonderful children", day: 13, month: "APR" },
        { title: "Seminar: Caring for children with autism", day: 25, month: "APR" }
    ];

    return (
        <section className="mx-auto mb-16 px-4 2xl:px-0 w-full max-w-7xl">
            <div className="flex items-center gap-4 mb-16">
                <h3 className="min-w-fit font-medium text-primary-text text-2xl lg:text-4xl leading-[140%]">Our Events</h3>
                <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4">
                {events.map((event, index) => (
                    <div key={index} className="flex justify-between items-center gap-4 bg-yellow-dark px-4 lg:px-12 py-8 rounded-2xl w-full max-w-[628px] font-medium text-primary-text">
                        <div className="self-start">
                            <p className="text-3xl lg:text-5xl leading-[120%]">{event.day}</p>
                            <p className="tracking-wide">{event.month}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-4">
                                <p className="tracking-wide">NEXT EVENTS</p>
                                <div className="bg-primary-text w-[44px] h-[2px]"></div>
                            </div>
                            <p className="font-bold lg:text-[26px] text-xl leading-[150%]">{event.title}</p>
                        </div>
                        <Image src={"/assets/icons/arrow-right-white-bg.svg"} alt="arrow right" width={56} height={56} />
                    </div>
                ))}
            </div>
        </section>
    )
}