import VolunteerForm from "@/components/get-involved/VolunteerForm";
import VolunteerOpportunities from "@/components/get-involved/VolunteerOpportunities";
import WaysToHelp from "@/components/get-involved/WaysToHelp";

export default function Page() {
    return (
        <main>
            <WaysToHelp />
            <VolunteerOpportunities />
            <VolunteerForm />
        </main>
    )
}