import Contribute from "@/components/common/Contribute";
import Events from "@/components/common/Events";
import ProjectsDone from "@/components/common/ProjectsDone";
import AboutUs from "@/components/home/AboutUs";
import Donation from "@/components/home/Donation";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <AboutUs />
            <WhatWeDo />
            <ProjectsDone />
            <Donation />
            <Contribute />
            <Events />
        </main>
    );
}