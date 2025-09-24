import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Footer() {
    const homeLinks: { name: string; href: string }[] = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "What We Do", href: "/what-we-do" },
        { name: "Contact", href: "/contact" },
    ];
    const moreLinks: { name: string; href: string }[] = [
        { name: "Donate", href: "/donation" },
        { name: "Resources", href: "/resources" },
    ];
    const socialLinks: { name: string; href: string }[] = [
        { name: "Facebook", href: "https://www.facebook.com/afran-group-foundation" },
        { name: "Instagram", href: "https://www.instagram.com/afran-group-foundation" },
        { name: "Twitter", href: "https://twitter.com/afran-group-foundation" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/afran-group-foundation" },
    ];

    return (
        <footer className="bg-gray-black mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 xl:px-10 py-12 md:py-20 w-full max-w-[120rem] text-white">
            <div className="flex flex-wrap justify-center lg:justify-between gap-4 mx-auto w-full max-w-7xl">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <Image
                            src="/icons/logo.png"
                            alt="Afran Group Foundation Logo"
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="font-semibold text-primary-500 text-lg lg:text-xl leading-tight">The AFRAN Group</span>
                        <span className="font-medium text-secondary-500 text-xs lg:text-sm leading-tight">Foundation</span>
                    </div>
                </div>
                <div className="flex justify-around lg:justify-between w-full lg:w-sm">
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl leading-[160%]">Home</h3>
                        {homeLinks.map(link => (
                            <Link href={link.href} key={link.href} className="block opacity-80 hover:opacity-100 text-sm leading-[160%]">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl leading-[160%]">More</h3>
                        {moreLinks.map(link => (
                            <Link href={link.href} key={link.href} className="block opacity-80 hover:opacity-100 text-sm leading-[160%]">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl leading-[160%]">Connect</h3>
                        {socialLinks.map(link => (
                            <Link href={link.href} key={link.href} className="block opacity-80 hover:opacity-100 text-sm leading-[160%]">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-xl leading-[160%]">Subscribe to get latest updates</h3>
                    <div className="flex items-center gap-2 w-full max-w-sm">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit" variant="outline" className="text-gray-black">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}