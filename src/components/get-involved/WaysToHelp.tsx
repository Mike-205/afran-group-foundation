import { DollarSign, HandHeart, Heart, Megaphone, Share2, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function WaysToHelp() {
    const ways = [
        {
        title: "Monthly Donation",
        description: "Provide sustained support with a recurring monthly contribution",
        icon: Heart,
        action: "Start Donating",
        badge: "Most Impact",
        color: "red",
        link: "/donation"
        },
        {
        title: "Volunteer",
        description: "Join our team and directly support survivors in your community",
        icon: HandHeart,
        action: "Apply Now",
        badge: "Hands-on",
        color: "darkblue",
        link: "#volunteer-opportunities"
        },
        {
        title: "Fundraising",
        description: "Organize events or campaigns to raise funds for our programs",
        icon: DollarSign,
        action: "Start Fundraising",
        badge: "Community",
        color: "green",
        link: "/contact"
        },
        {
        title: "Advocacy",
        description: "Help us change policies and systems to better protect children",
        icon: Megaphone,
        action: "Join Advocates",
        badge: "Systemic Change",
        color: "orange",
        link: "/contact"
        },
        {
        title: "Corporate Partnership",
        description: "Partner with us for employee engagement and social impact",
        icon: Users,
        action: "Partner With Us",
        badge: "Business",
        color: "darkblue",
        link: "/contact"
        },
        {
        title: "Spread Awareness",
        description: "Share our mission and help break the silence on child abuse",
        icon: Share2,
        action: "Share Now",
        badge: "Education",
        color: "green",
        link: "/contact"
        }
    ];

    return (
        <section>
            <div className="mx-auto px-4 container">
                <h2 className="mb-12 font-bold text-foreground text-4xl text-center">Ways to Help</h2>
                <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
                    {ways.map((way, index) => (
                    <Card key={index} className="bg-card shadow-medium hover:shadow-strong p-8 border-0 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6">
                        <way.icon className={`h-12 w-12 ${way.color === "red" ? "text-error-500": way.color === "darkblue" ? "text-blue-950" : way.color === "green" ? "text-green-500" : "text-orange-500"}`} />
                        <Badge variant={way.color === 'primary' ? 'default' : 'secondary'}>
                            {way.badge}
                        </Badge>
                        </div>
                        <h3 className="mb-4 font-bold text-foreground text-2xl">{way.title}</h3>
                        <p className="mb-6 text-muted-foreground leading-relaxed">
                        {way.description}
                        </p>
                        <Button variant={way.color === 'emergency' ? 'emergency' : 'outline'} className={`hover:text-white w-full ${way.title === "Monthly Donation" ? "bg-red-400 text-white hover:bg-red-500" : "hover:bg-primary-500"}`}>
                            <Link href={way.link} className={"w-full"}>{way.action}</Link>
                        </Button>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}