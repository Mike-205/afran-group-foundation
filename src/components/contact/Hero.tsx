import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-yellow-light mx-auto px-4 2xl:px-0 py-12 md:py-20 w-full max-w-[120rem]">
            <div className="flex flex-wrap justify-between mx-auto w-full max-w-7xl">
                <div className="flex lg:flex-row flex-col items-center gap-8 w-full">
                    <div className="w-full max-w-[704px]">
                        <div className="flex items-center gap-2 md:gap-4 mb-5">
                            <span className="bg-black rounded-full w-16 md:w-[72px] h-[2px]"></span>
                            <h2 className="font-bold">CONTACT US</h2>
                        </div>
                        <div className="flex flex-col justify-end gap-4ml-8 md:ml-[88px] max-w-[480px]">
                            <h1 className="font-bold text-[#1D2130] lg:text-[56px] text-2xl md:text-4xl leading-[120%]">We&lsquo;d love to hear from you</h1>
                            <p className="mt-6 text-[#1D2130] text-sm lg:text-base leading-[160%]">Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8">
                        <div>
                            <h2 className="font-bold text-primary-text text-2xl leading-[160%]">Let&lsquo;s talk!</h2>
                            <div className="flex flex-wrap space-x-8 text-primary-text leading-[28px]">
                                <p>+254798654685</p>
                                <p>info@afrangroupfoundation.com</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-primary-text text-2xl leading-[160%]">Head Office</h2>
                            <p>CBD, Nairobi</p>
                            <p>Kenya</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-primary-text text-2xl leading-[160%]">Branch Office</h2>
                            <p>CBD, Nairobi</p>
                            <p>Kenya</p>
                        </div>
                        <div className="flex gap-4 mt-2">
                            {["/icons/facebook.svg", "/icons/twitter.svg", "/icons/linkedin.svg"].map((icon, idx) => (
                                <Image key={idx} src={icon} alt="social icon" width={20} height={20} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}