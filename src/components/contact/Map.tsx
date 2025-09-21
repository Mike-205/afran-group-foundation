"use client";

import { useEffect, useState } from "react";

export default function Map () {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="flex justify-center items-center mx-auto mb-8 px-4 [1660px]:px-0 w-full max-w-[100rem] overflow-clip">
            {isClient && (
                <iframe
                    width="100%"
                    height="500px"
                    scrolling="no"
                    className="rounded-[12px]"
                    src="https://maps.google.com/maps?q=P.O.%20Box%2047772%20Nairobi%2C%20Kenya&z=16&output=embed"
                    ></iframe>
            )}
        </section>
    );
};
