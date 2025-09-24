import VolunteerForm from "@/components/get-involved/VolunteerForm";
import VolunteerOpportunities from "@/components/get-involved/VolunteerOpportunities";
import WaysToHelp from "@/components/get-involved/WaysToHelp";
import Hero from "@/components/get-involved/Hero";

export default function Page() {
    return (
        <main>
            <Hero />
            <WaysToHelp />
            <VolunteerOpportunities />
            <VolunteerForm />
        </main>
    )
}