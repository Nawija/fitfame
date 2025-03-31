import Image from "next/image";
import Hero from "@/public/Images/tired-bearded-man.jpg";

export default function Home() {
    return (
        <div className="anim-opacity">
            <div className="relative h-[85vh] w-full -mt-12">
                <Image src={Hero} fill className="object-cover" alt="hero" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="z-10 absolute top-1/4 left-1/3 lg:left-1/2 -translate-x-1/2 text-white font-medium w-1/2">
                    <h1 className="font-bold uppercase text-5xl lg:text-9xl">
                        Zmień swoje ciało już dziś!
                    </h1>
                </div>
            </div>
            <section>
                <div className="h-[200vh]" />
            </section>
        </div>
    );
}
