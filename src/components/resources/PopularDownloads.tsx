import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PopularDownloads() {
    const files = [
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
        <section className="bg-primary-100 mx-auto px-4 2xl:px-0 py-16 md:py-24 w-full max-w-[120rem]">
            <div className="mx-auto w-full max-w-7xl">
                <h2 className="text-gray-black w-full font-bold text-3xl lg:text-4xl text-center mb-3">Popular Downloads</h2>
                <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">Access our most frequently downloaded resources</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 shadow-md shadow-gray-600/10 hover:shadow-lg p-6 rounded-2xl w-full transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-center mb-4 w-full">
                                <div className="p-3 bg-primary-50 rounded-xl">
                                    <FileText className="text-primary-600" size={24} />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-secondary-100 text-secondary-400 font-medium text-xs">
                                    {file.type}
                                </span>
                            </div>

                            <h3 className="mb-3 font-bold text-lg text-gray-800 line-clamp-2">{file.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{file.description}</p>

                            <div className="border-t border-gray-100 pt-4 mt-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <span className="font-medium">{file.size}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Download className="mr-1" size={14} />
                                        <span>{file.downloads.toLocaleString()}</span>
                                    </div>
                                </div>

                                <Link
                                    href={file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-400/90 hover:from-blue-600 hover:to-blue-500/90 px-4 py-3 rounded-lg w-full text-white font-medium text-sm transition-colors duration-300 group"
                                >
                                    <Download className="mr-2 group-hover:animate-bounce" size={18} />
                                    Download Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}