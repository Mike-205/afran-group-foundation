import { Phone } from "lucide-react";
import Link from "next/link";

export default function EmergencyContact() {
    const contacts = [
        {
            title: "National Child Helpline",
            number: "116",
            description: "A free service for children to report abuse, neglect and get counselling, linked to child protection and legal aid",
            available: "Available 24/7"
        },
        {
            title: "Child Welfare Society of Kenya",
            number: "+254 713 908 835",
            description: "Provides rescue services for children in dangerous situations, along with psychological and legal support.",
            available: "Available 24/7"
        },
        {
            title: "Directorate of Criminal Investigation",
            number: "0800 722 203",
            description: "A law-enforcement unit investigating crimes against children and protecting children's rights.",
            available: "Available 24/7"
        },
        {
            title: "Directorate of Criminal Investigation",
            number: "0800 722 203",
            description: "A law-enforcement unit investigating crimes against children and protecting children's rights.",
            available: "Available 24/7"
        },
    ];

    return (
        <section className="mx-auto px-4 2xl:px-0 py-16 md:py-24 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-7xl">
                <h2 className="text-gray-black w-full font-bold text-3xl lg:text-4xl text-center mb-3">Emergency Contacts</h2>
                <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">Immediate assistance resources for child protection cases</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 shadow-md shadow-gray-600/10 hover:shadow-lg p-6 rounded-2xl w-full transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-center mb-4 w-full">
                                <div className="p-3 bg-error-50 rounded-xl">
                                    <Phone className="text-error-500" size={24} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-100 text-green-500 font-medium text-xs flex items-center gap-1">
                                    <div className="size-2 rounded-full bg-green-400 animate-pulse"></div>
                                    {contact.available}
                                </div>
                            </div>

                            <h3 className="mb-3 font-bold text-lg text-gray-800 line-clamp-2">{contact.title}</h3>
                            <p className="text-error-500 text-xl font-medium mb-3">{contact.number}</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{contact.description}</p>

                            <div className="mt-auto">
                                <Link
                                    href={`tel:${contact.number}`}
                                    className="flex justify-center items-center bg-gradient-to-r from-error-500 to-error-400/90 hover:from-error-600 hover:to-error-500/90 px-4 py-3 rounded-lg w-full text-white font-medium text-sm transition-colors duration-300 group"
                                >
                                    <Phone className="mr-2 group-hover:animate-pulse" size={18} />
                                    Call Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}