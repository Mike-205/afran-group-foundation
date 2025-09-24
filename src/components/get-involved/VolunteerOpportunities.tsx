import { Clock, UserPlus } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

export default function VolunteerOpportunities() {
    const volunteerRoles = [
        {
        title: "Crisis Support Volunteer",
        time: "10+ hours/week",
        description: "Provide direct support to families in crisis situations",
        requirements: ["Background check", "Training completion", "6-month commitment"]
        },
        {
        title: "Educational Program Assistant",
        time: "5+ hours/week",
        description: "Help deliver prevention education in schools and communities",
        requirements: ["Teaching experience preferred", "Training provided", "Flexible schedule"]
        },
        {
        title: "Administrative Support",
        time: "4+ hours/week",
        description: "Support office operations, data entry, and program coordination",
        requirements: ["Basic computer skills", "Reliable schedule", "Detail-oriented"]
        },
        {
        title: "Event Volunteer",
        time: "As needed",
        description: "Help with fundraising events, awareness campaigns, and community outreach",
        requirements: ["Enthusiastic attitude", "Team player", "Event experience helpful"]
        }
    ];

    return (
        <section className="bg-secondary py-20" id="volunteer-opportunities">
            <div className="mx-auto px-4 container">
                <h2 className="mb-12 font-bold text-foreground text-4xl text-center">Volunteer Opportunities</h2>
                <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-6xl">
                    {volunteerRoles.map((role, index) => (
                    <Card key={index} className="bg-card shadow-medium p-8 border-0 grid grid-rows-3">
                        <div className="flex items-center gap-3">
                            <UserPlus className="w-6 h-6 text-primary" />
                            <Badge variant="outline" className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {role.time}
                            </Badge>
                        </div>
                        <h3 className="font-bold text-foreground text-2xl">{role.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {role.description}
                        </p>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">Requirements:</h4>
                            {role.requirements.map((req, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="bg-primary rounded-full w-2 h-2" />
                                    <span className="text-muted-foreground text-sm">{req}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full bg-primary-400 text-white hover:text-white hover:bg-primary-500">
                            <Link href={"#volunteer-form"} className={"w-full"}>Apply for This Role</Link>
                        </Button>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}