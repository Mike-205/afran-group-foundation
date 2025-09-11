import Hero from "@/components/home/hero-section";
import Navbar from "@/components/layout/navbar";

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto p-6 space-y-8">
            <Navbar />
            <Hero />
        </main>
    );
}