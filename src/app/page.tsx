import Contribute from "@/components/common/Contribute";
import Donation from "@/components/common/Donation";
import Events from "@/components/common/Events";
import ProjectsDone from "@/components/common/ProjectsDone";
import AboutUs from "@/components/home/AboutUs";
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