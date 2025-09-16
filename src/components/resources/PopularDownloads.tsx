import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function PopularDownloads() {
    const files: { name: string; description: string; type: string; size: string; downloads: number; url: string }[] = [
        {
            name: "Guidelines for Child Protection Case Management and Referral in Kenya",
            description: "Reference material for actors on managing cases of child protection, and how to make referrals.",
            type: "PDF",
            size: "2.5MB",
            downloads: 1245,
            url: "/files/GUIDELINES-FOR-CHILD-PROTECTION-CASE-MANAGEMENT-AND-REFERRAL-IN-KENYA.-1.pdf"
        },
        {
            name: "Protecting Children Against Violence (VAC Booklet, 2019)",
            description: "A child-friendly version of the Violence Against Children Survey; helps children and caregivers understand types of violence, how to spot them, and where to get help.",
            type: "PDF",
            size: "3.5MB",
            downloads: 987,
            url: "/files/Child-Friendly-VAC-Booklet.pdf"
        },
        {
            name: "Industry Guidelines for Child Online Protection and Safety in Kenya, 2022",
            description: "Guidelines focused on online risks for children, ICT/telecom sector responsibilities, safety standards etc.",
            type: "PDF",
            size: "0.3MB",
            downloads: 2765,
            url: "/files/Industry-Guidelines-for-Child-Online-Protection-(COP)-and-Safety-in Kenya_Apr2025.pdf"
        },
        {
            name: "Sessional Paper No. 1 of 2024 on Child Protection and Safeguarding Policy",
            description: "National policy to guide harmonized child protection & safeguarding.",
            type: "PDF",
            size: "17.8MB",
            downloads: 432,
            url: "/files/SESSIONAL-PAPER-NO.-1-OF-2024-ON-CHILD-PROTECTION-AND-SAFEGUARDING-POLICY-1.pdf"
        }
    ];

    return (
        <section className="bg-primary-200 mx-auto px-4 2xl:px-0 py-12 md:py-20 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="w-full font-bold text-3xl lg:text-4xl text-center">Popular Downloads</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {files.map((file, index) => (
                        <div key={index} className="bg-white shadow-sm hover:shadow-md p-4 rounded-2xl w-full max-w-sm transition-shadow">
                            <div className="flex justify-between mb-2 w-full">
                                <FileText className="text-black" size={32} />
                                <p className="px-2 rounded-xl outline outline-gray-200 h-fit text-primary-text text-sm leading-[160%]">{file.type}</p>
                            </div>
                            <h3 className="mb-2 font-bold text-lg">{file.name}</h3>
                            <p className="text-primary-text text-sm leading-[160%]">{file.description}</p>
                            <div className="flex justify-between mt-4">
                                <p className="text-primary-text text-sm leading-[160%]">{file.size}</p>
                                <p className="text-gray-500 text-sm leading-[160%]"><Download className="inline mr-1 mb-1" size={16} /> {file.downloads} Downloads</p>
                            </div>
                            <Link href={file.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-gradient-to-r from-yellow-400 hover:from-yellow-500 to-yellow-500 hover:to-yellow-600 mt-4 px-4 py-2 border rounded-lg min-w-fit h-fit text-white text-sm">
                                <Download className="mr-1 mb-0.5" size={16} />
                                <p>Download</p>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}