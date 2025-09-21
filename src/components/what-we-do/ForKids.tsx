import { FileText, Heart, Scale, Shield, Users, Briefcase } from "lucide-react";

export default function ForKids() {
    const supports: {name: string; description: string; icon: React.ReactNode}[] = [
        {
            name: "Policy Engagement",
            description: "We influence child protection policies, host dialogues, and engage leaders to create stronger systems that safeguard children.",
            icon: <FileText className="text-gray-white" size={24} />
        },
        {
            name: "Psychosocial Support",
            description: "Through trauma-informed counseling, therapy, and wellness centers, we help children and families heal and rebuild.",
            icon: <Heart className="text-gray-white" size={24} />
        },
        {
            name: "Legal Aid & Justice",
            description: "In partnership with pro bono lawyers and legal aid groups, we support survivors through legal processes and fight for accountability.",
            icon: <Scale className="text-gray-white" size={24} />
        },
        {
            name: "Emergency Care",
            description: "We provide 24-hour protection, food, and care for children escaping abuse, ensuring immediate safety and stability.",
            icon: <Shield className="text-gray-white" size={24} />
        },
        {
            name: "Child Protection Clubs",
            description: "We run awareness campaigns, school clubs, and workshops that empower communities to prevent and respond to child abuse.",
            icon: <Users className="text-gray-white" size={24} />
        },
        {
            name: "Family Empowerment",
            description: "We strengthen vulnerable families with skills training, income-generating projects, and agribusiness initiatives to break cycles of violence.",
            icon: <Briefcase className="text-gray-white" size={24} />
        }
    ];

    return (
        <section className="bg-primary-100 mx-auto px-6 md:px-8 2xl:px-0 py-12 md:py-16 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-7xl">
                <h1 className="font-bold text-gray-black text-2xl md:text-4xl lg:text-5xl leading-[120%] ml-6 md:ml-[88px]">What we do for our kids</h1>
                <p className="text-base lg:text-lg leading-[160%] text-gray-700 ml-6 md:ml-[88px] mt-5 md:mt-6 max-w-[704px]">
                    We provide comprehensive support to children who have experienced abuse, focusing on their emotional, physical, and educational needs.
                </p>

                <div className="flex flex-wrap gap-8 mt-8 md:mt-10 ml-6 md:ml-[88px]">
                    {supports.map((support, index) => (
                        <div key={index} className="flex items-start gap-4 w-full max-w-[364px]">
                            <div className="flex flex-shrink-0 justify-center items-center bg-primary-300 rounded-lg w-12 md:w-14 h-12 md:h-14 p-3">
                                {support.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-black text-lg md:text-xl mb-2">{support.name}</h3>
                                <p className="text-sm lg:text-base leading-[160%] text-gray-700">{support.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}