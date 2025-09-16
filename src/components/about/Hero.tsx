import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative mx-auto px-4 2xl:px-0 pb-[128px] lg:pb-[224px] w-full max-w-7xl">
            <div className="my-8 lg:my-12">
                <div className="flex items-center gap-4 mb-5">
                    <span className="bg-secondary-300 rounded-full w-[72px] h-[2px]"></span>
                    <h2 className="text-secondary-400 font-semibold">KNOW ABOUT US</h2>
                </div>
                <div className="flex lg:flex-row flex-col justify-end gap-4">
                    <h1 className="max-w-[718px] text-gray-black font-bold text-2xl lg:text-4xl leading-[120%]">We are a non-governmental organization</h1>
                    <div className="max-w-[465px]">
                        <p className="text-gray-black font-bold text-lg lg:text-xl leading-[150%]">Our Mission to Protect Every Child</p>
                        <p className="text-gray-700 text-base lg:text-base leading-[160%]">Breaking the cycle of abuse through advocacy, education, and unwavering support for survivors across Kenya and Africa</p>
                    </div>
                </div>
            </div>
            <div className="-bottom-[128px] lg:-bottom-[224px] left-0 absolute flex justify-center px-4 2xl:px-0 w-full">
                <Image src={"/images/video.jpg"} alt="team celebrating in the open" width={1280} height={448} className="rounded-3xl w-full max-w-[1280px] h-64 lg:h-[448px] object-cover" />
            </div>
        </section>
    )
}