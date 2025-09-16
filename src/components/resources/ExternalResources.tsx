import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ExternalResources() {
    const links: { name: string; url: string; description: string }[] = [
        { name: "UNICEF Resources", url: "https://www.unicef.org", description: "Comprehensive resources on child protection, including guidelines, reports, and tools for practitioners." },
        { name: "WHO - Child Abuse", url: "https://www.who.int/news-room/fact-sheets/detail/child-maltreatment", description: "Fact sheets and resources on child maltreatment, prevention strategies, and global statistics." },
        { name: "Child Welfare Information Gateway", url: "https://www.childwelfare.gov/", description: "A wide range of resources on child welfare topics, including abuse prevention, foster care, and adoption." },
    ];

    return (
        <section className="bg-primary-100 mx-auto px-4 2xl:px-0 py-12 md:py-20 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="w-full font-bold text-3xl lg:text-4xl text-center">External Resources</h2>
                <div className="space-y-4 mt-8">
                    {links.map((link, index) => (
                        <div key={index} className="flex md:flex-row flex-col justify-between bg-white shadow-sm hover:shadow-md p-6 rounded-2xl h-full transition-shadow">
                            <div>
                                <h3 className="mb-2 font-bold text-lg">{link.name}</h3>
                                <p className="text-primary-text text-sm leading-[160%]">{link.description}</p>
                            </div>
                            <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mt-4 px-4 py-2 border border-primary-500 rounded-full min-w-fit h-fit text-primary-500 text-sm">
                                <ExternalLink className="mr-1 mb-0.5" size={16} />
                                <p>Visit Site</p>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}