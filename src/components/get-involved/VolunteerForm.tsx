import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

export default function VolunteerForm() {
    return (
        <section className="bg-secondary py-20" id="volunteer-form">
        <div className="mx-auto px-4 container">
        <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-bold text-foreground text-4xl text-center">Volunteer Application</h2>
            <Card className="bg-card shadow-medium p-8 border-0">
            <div className="space-y-6">
                <div className="gap-4 grid md:grid-cols-2">
                <div>
                    <label className="block mb-2 font-medium text-foreground text-sm">First Name</label>
                    <Input placeholder="Enter your first name" />
                </div>
                <div>
                    <label className="block mb-2 font-medium text-foreground text-sm">Last Name</label>
                    <Input placeholder="Enter your last name" />
                </div>
                </div>
                <div>
                <label className="block mb-2 font-medium text-foreground text-sm">Email Address</label>
                <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                <label className="block mb-2 font-medium text-foreground text-sm">Phone Number</label>
                <Input type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                <label className="block mb-2 font-medium text-foreground text-sm">Volunteer Interest</label>
                <select className="bg-background px-3 py-2 border border-input rounded-md w-full">
                    <option>Select your preferred role</option>
                    <option>Crisis Support Volunteer</option>
                    <option>Educational Program Assistant</option>
                    <option>Administrative Support</option>
                    <option>Event Volunteer</option>
                </select>
                </div>
                <div>
                <label className="block mb-2 font-medium text-foreground text-sm">Why do you want to volunteer?</label>
                <textarea 
                    placeholder="Tell us about your motivation and experience..." 
                    className="w-full min-h-[100px]"
                />
                </div>
                <Button variant="hero" className="w-full" size="lg">
                Submit Application
                </Button>
            </div>
            </Card>
        </div>
        </div>
    </section>
    )
}