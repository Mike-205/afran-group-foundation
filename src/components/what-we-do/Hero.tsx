import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-wrap justify-between mx-auto px-4 2xl:px-0 py-8 w-full max-w-7xl">
            <div className="flex lg:flex-row flex-col items-center w-full">
                <div className="my-8 lg:my-12 w-full max-w-[704px]">
                    <div className="flex items-center gap-2 md:gap-4 mb-5">
                        <span className="bg-secondary-300 rounded-full w-16 md:w-[72px] h-[2px]"></span>
                        <h2 className="text-secondary-400 font-semibold">WHAT WE DO</h2>
                    </div>
                    <div className="flex flex-col justify-end gap-4 ml-8 md:ml-[88px]">
                        <h1 className="text-gray-black max-w-[461px] font-bold lg:text-[56px] text-2xl md:text-4xl leading-[120%]">We are working Across the country</h1>
                        <div className="space-y-4 md:mt-6">
                            <p className="text-gray-700 text-sm lg:text-base leading-[160%]">Breaking the cycle of abuse through advocacy, education, and unwavering support for survivors across Kenya and Africa. To create a safe world for all children by preventing child abuse, empowering survivors, and advocating for systemic change that protects the most vulnerable in our communities.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-auto px-4 2xl:px-0 w-full max-w-[476px] max-h-[384px]">
                    <Image src={"/images/image-6.jpg"} alt="team celebrating in the open" width={476} height={384} className="rounded-3xl object-cover" />
                </div>
            </div>
        </section>
    )
}