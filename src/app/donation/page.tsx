import Contribute from "@/components/common/Contribute";
import Donation from "@/components/common/Donation";
import Hero from "@/components/donation/Hero";

export default function Page() {
    return (
        <main>
            <Hero />
            <Donation />
            <Contribute />
        </main>
    )
}