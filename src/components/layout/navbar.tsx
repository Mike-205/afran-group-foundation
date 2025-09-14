"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../common/buttons";
import {Menu, X} from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links: { name: string; href: string }[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "What We Do", href: "/what-we-do" },
        { name: "Get Involved", href: "/get-involved" },
        { name: "Contact", href: "/contact" }
    ]

    const menuIconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 90 }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3 }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3 }
        }
    };

    return (
        <nav className="top-22 md:top-16 z-40 sticky bg-gray-white shadow-gray-700/8 shadow-md w-full h-16">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 xl:px-10 max-w-7xl">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image
                                src="/icons/logo.png"
                                alt="Afran Group Foundation Logo"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="flex flex-col ml-2">
                            <span className="font-semibold text-primary-500 text-lg lg:text-xl leading-tight">Afran Group</span>
                            <span className="font-medium text-secondary-500 text-xs lg:text-sm leading-tight">Foundation</span>
                        </div>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-baseline space-x-4 ml-10">
                            {links.map(link => (
                                <Link href={link.href} key={link.href} className="px-3 py-2 font-medium text-gray-800 hover:text-primary-500 text-sm">{link.name}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Donate Button */}
                    <div className="hidden lg:flex items-center">
                        <Button>Donate Now</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex justify-center items-center p-2 rounded-md focus:outline-none text-gray-800 hover:text-primary-500"
                            aria-expanded={isOpen}
                            animate={isOpen ? "open" : "closed"}
                            variants={menuIconVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <Menu className="w-6 h-6" />
                            ) : (
                                <X className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        className="lg:hidden bg-gray-white overflow-hidden"
                    >
                        <div className="space-y-1 px-2 sm:px-3 pt-2 pb-3">
                            {links.map(link => (
                                <Link onClick={() => {setIsOpen(false)}} href={link.href} key={link.name} className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-primary-500 text-base">{link.name}</Link>
                            ))}
                        </div>
                        <div className="pt-4 pb-3 border-gray-200 border-t">
                            <div className="flex items-center px-5">
                                <Button fullWidth>Donate Now</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
