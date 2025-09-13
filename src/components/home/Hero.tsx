"use client";
import Image from 'next/image';
import { Button } from '../common/buttons';

export default function Hero () {
    const backgroundImage = "/images/hero-image.png";

    return (
        <section className="relative flex justify-center items-center mx-auto -mt-38 md:-mt-32 pt-38 md:pt-16 w-full max-w-[120rem] h-screen overflow-hidden">
            {/* Background Image */}
            <div className="z-0 absolute inset-0 mt-16 w-full h-full">
                <Image
                    src={backgroundImage}
                    alt="Children protection illustration"
                    width={1536}
                    height={864}
                    className="opacity-80 w-full h-full object-cover"
                />
            </div>

            {/* Gradient Overlay */}
            <div
                className="z-10 absolute inset-0 bg-radial from-[#1B4F98] to-[#082C5E] opacity-80"
            ></div>


            {/* Content */}
            <div className="z-30 relative mx-auto px-4 text-center container">
                <div className="mx-auto max-w-4xl">
                    <h1 className="mb-6 font-bold text-white text-3xl sm:text-4xl md:text-6xl leading-tight">
                        Protecting Every Child&lsquo;s Right to{" "}
                        <span className="text-yellow-200">Safety and Dignity</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-3xl text-white/90 text-lg sm:text-xl md:text-2xl leading-tight sm:leading-relaxed">
                        Breaking the silence on child abuse through advocacy, support, and systemic change across Kenya and Africa
                    </p>

                    <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                        <Button variant="primary" size={"xl"} className='bg-gradient-to-r from-red-400 hover:from-red-500 to-red-500 hover:to-red-600 animate-pulse hover:animate-none'>
                            Report Abuse Safely
                        </Button>
                        <Button variant="primary" size={"xl"} className='bg-gradient-to-r from-yellow-400 hover:from-yellow-500 to-yellow-500 hover:to-yellow-600'>
                            Support Our Mission
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="bottom-0 left-0 z-20 absolute bg-gradient-to-t from-white/80 via-white/50 to-transparent w-full h-12 md:h-20" />
        </section>
    );
};
