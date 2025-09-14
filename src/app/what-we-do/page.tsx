import Contribute from "@/components/common/Contribute";
import Events from "@/components/common/Events";
import ProjectsDone from "@/components/common/ProjectsDone";
import ForKids from "@/components/what-we-do/ForKids";
import Hero from "@/components/what-we-do/Hero";

export default function Page() {
    return (
        <main>
            <Hero />
            <ForKids />
            <ProjectsDone />
            <Contribute />
            <Events />
        </main>
    )
}