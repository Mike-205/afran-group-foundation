import ContactUs from "@/components/resources/ContactUs";
import EmergencyContact from "@/components/resources/EmergencyContact";
import ExternalResources from "@/components/resources/ExternalResources";
import Hero from "@/components/resources/Hero";
import PopularDownloads from "@/components/resources/PopularDownloads";

export default function Page() {
    return (
        <main>
            <Hero />
            <EmergencyContact />
            <PopularDownloads />
            <ExternalResources />
            <ContactUs />
        </main>
    )
}