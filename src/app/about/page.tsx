import Awards from "@/components/about/Awards";
import Contribute from "@/components/common/Contribute";
import Hero from "@/components/about/Hero";
import Journey from "@/components/about/Journey";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import Events from "@/components/common/Events";

export default function Page() {
    return (
        <main>
            <Hero />
            <Mission />
            <Awards />
            <Journey />
            <Team />
            <Contribute />
            <Events />
        </main>
    )
}