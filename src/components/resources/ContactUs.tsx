import Link from "next/link";

export default function ContactUs() {
    return (
        <section className="bg-primary-500 mx-auto px-4 2xl:px-0 w-full max-w-[120rem] h-[420px] text-gray-white">
            <div className="relative rounded-3xl w-full h-full">
                <div className="z-20 absolute flex flex-col justify-center items-center gap-8 rounded-3xl w-full h-full">
                    <p className="mx-auto px-4 lg:px-0 w-full max-w-[805px] font-bold text-2xl lg:text-4xl text-center leading-[120%]">Need Additional Support?</p>
                    <p className="mx-auto px-4 lg:px-0 w-full max-w-[805px] text-gray-100 text-xl text-center leading-[120%]">Can&lsquo;t find what you&lsquo;re looking for? Our team is here to help you access the resources you need.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={"/contact"}>
                            <button className="bg-gradient-to-r from-error-400 to-error-500 mt-4 px-8 py-3 rounded-sm w-fit font-semibold animate-pulse hover:animate-none hover:cursor-pointer">Contact Support</button>
                        </Link>
                        <Link href={"/contact"}>
                            <button className="hover:bg-yellow-dark mt-4 px-8 py-3 rounded-sm w-fit font-semibold hover:cursor-pointer">Request Custom Resources</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}