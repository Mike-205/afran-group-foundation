"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '../common/buttons';

interface HeroProps {
    backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
   backgroundImage = "/assets/images/hero-image.png"
}) => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Children protection illustration"
                    fill
                    priority
                    className="object-cover opacity-20"
                    sizes="100vw"
                />
            </div>

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ background: "var(--gradient-hero)", opacity: 0.8 }}
            ></div>


            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Protecting Every Child&lsquo;s Right to{" "}
                        <span className="text-yellow-200">Safety and Dignity</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Breaking the silence on child abuse through advocacy, support, and systemic change across Kenya and Africa
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="primary" size={"xl"}>
                            Report Abuse Safely
                        </Button>
                        <Button variant="primary" size={"xl"}>
                            Support Our Mission
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};

export default Hero;
