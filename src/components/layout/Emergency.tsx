'use client';

import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, FileText } from "lucide-react";


export default function EmergencyBar () {
    return (
    <div className="top-0 z-40 sticky bg-error-500 shadow-medium px-4 py-2 md:py-3 h-32 sm:h-22 md:h-16 text-emergency-foreground">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mx-auto w-full h-full font-medium text-sm container">
            <div className="flex justify-center items-center gap-2 mx-auto sm:mx-0 w-full sm:w-fit">
                <AlertTriangle className="w-4 h-4 text-gray-white" />
                <span className="font-semibold text-gray-white">EMERGENCY:</span>
            </div>
            <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
            onClick={() => window.open('tel:+254798654685')}
            >
            <Phone className="mr-2 w-4 h-4" />
            Call +254-798-654-685
            </Button>
            
            <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
            >
            <FileText className="mr-2 w-4 h-4" />
            Report Abuse
            </Button>
            
            <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
            >
            Get Help Now
            </Button>
        </div>
    </div>
    );
};
