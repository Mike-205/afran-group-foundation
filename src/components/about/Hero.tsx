import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative mx-auto pt-20 pb-[224px] w-full max-w-7xl">
            <div className="my-12">
                <div className="flex items-center gap-4 mb-5">
                    <span className="bg-black rounded-full w-[72px] h-[2px]"></span>
                    <h2 className="font-bold">KNOW ABOUT US</h2>
                </div>
                <div className="flex justify-end">
                    <h1 className="max-w-[718px] font-bold text-5xl leading-[120%]">We are a non-governmental organization</h1>
                    <div className="max-w-[465px]">
                        <p className="font-bold text-xl leading-[150%]">Our Mission to Protect Every Child</p>
                        <p className="leading-[160%]">Breaking the cycle of abuse through advocacy, education, and unwavering support for survivors across Kenya and Africa</p>
                    </div>
                </div>
            </div>
            <div className="-bottom-[224px] absolute flex justify-center w-full">
                <Image src={"/assets/images/video.jpg"} alt="team celebrating in the open" width={1280} height={448} className="rounded-3xl" />
            </div>
        </section>
    )
}