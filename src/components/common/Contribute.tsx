import Image from "next/image";
import { Button } from "./buttons";

export default function Contribute() {
    return (
        <section className="mx-auto mb-10 lg:mb-20 px-4 2xl:px-0 w-full max-w-[1280px] h-[420px]">
            <div className="relative rounded-3xl w-full h-full">
                <div className="absolute bg-black opacity-60 rounded-3xl w-full h-full"></div>
                <div className="z-20 absolute flex flex-col justify-center items-center gap-8 rounded-3xl w-full h-full">
                    <p className="mx-auto px-4 lg:px-0 w-full max-w-[805px] font-bold text-white text-2xl lg:text-4xl text-center leading-[120%]">Together, we can create a world where every child is safe, supported, and free to thrive.</p>
                    <div className="space-x-4">
                        <Button variant="primary" className="bg-yellow-dark hover:bg-white font-medium text-black hover:cursor-pointer">Join as a volunteer</Button>
                        <Button variant="primary" className="bg-white hover:bg-yellow-dark font-medium text-black hover:cursor-pointer">Donate</Button>
                    </div>
                </div>
                <Image src={"/images/contribute.jpg"} alt="children happy" width={1280} height={384} className="rounded-3xl w-full h-full object-bottom object-cover" />
            </div>
        </section>
    )
}