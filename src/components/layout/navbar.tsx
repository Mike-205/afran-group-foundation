"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../common/buttons";
import {Menu, X} from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="bg-gray-white shadow-md shadow-gray-700/8">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-0">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image
                                src="/assets/svg/logo.png"
                                alt="Afran Group Foundation Logo"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="ml-2 flex flex-col">
                            <span className="text-primary-500 font-semibold text-lg lg:text-xl leading-tight">Afran Group</span>
                            <span className="text-secondary-500 font-medium text-xs lg:text-sm leading-tight">Foundation</span>
                        </div>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden lg:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500">Home</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500">About</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500">Programs</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500">Get Involved</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500">Contact</a>
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary-500 focus:outline-none"
                            aria-expanded={isOpen}
                            animate={isOpen ? "open" : "closed"}
                            variants={menuIconVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <Menu className="h-6 w-6" />
                            ) : (
                                <X className="h-6 w-6" />
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
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-500">Home</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-500">About</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-500">Programs</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-500">Get Involved</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-500">Contact</a>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
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
