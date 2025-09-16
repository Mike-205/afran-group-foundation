import { Phone } from "lucide-react";
import Link from "next/link";

export default function EmergencyContact() {
    const contacts: { name: string; number: string; description: string }[] = [
        { name: "National Child Helpline", number: "116", description: "A 24/7 free service for children to report abuse, neglect, get counselling, be linked to child protection, legal aid, shelter etc." },
        { name: "Directorate of Criminal Investigations - Anti-Human Trafficking & Child Protection Unit (AHTCPU)", number: "0800 722 203", description: "Specialised law-enforcement unit investigating crimes against children, human trafficking and protecting children's rights." },
        { name: "Child Welfare Society of Kenya (CWSK) - Emergency Rescue Services", number: "+254 713 908 835", description: "Provides rescue services for children in dangerous situations, along with medical, psychological, legal support, and placing children in safe environments." },
    ];

    return (
        <section className="mx-auto my-10 lg:my-20 w-full max-w-7xl">
            <h2 className="font-bold text-primary-text text-3xl lg:text-5xl text-center leading-[120%]">Emergency Contacts</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {contacts.map((contact, index) => (
                    <div key={index} className="relative flex flex-col justify-end gap-4 bg-white shadow-sm p-4 rounded-2xl w-full max-w-sm h-[26rem] font-medium text-primary-text text-sm text-center leading-[160%]">
                        <Phone className="mx-auto mb-auto text-error-500" size={48} />
                        <h3 className="top-20 right-0 left-0 absolute mb-auto px-4 text-lg text-center">{contact.name}</h3>
                        <p className="text-error-500 text-2xl">{contact.number}</p>
                        <p className="">{contact.description}</p>
                        <p className="mx-auto px-4 rounded-full outline outline-gray-200 w-fit">24/7</p>
                        <Link href={`tel:${contact.number}`} className="bg-error-500 hover:bg-error-600 px-4 py-2 rounded-lg max-h-fit text-white text-center">Call Now</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}