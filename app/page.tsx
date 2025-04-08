import Image from "next/image";

export default function Home() {
    return (
        <div className="anim-opacity">
            <div>
                <div className="relative h-[85vh] w-full -mt-48 ">
                    <Image
                        src="/images/tired-bearded-man.jpg"
                        fill
                        className="object-cover -z-20"
                        alt="hero"
                        quality={60}
                    />
                    <div className="absolute inset-0 bg-black/60 -z-20  " />
                    <h1 className="font-bold uppercase text-5xl lg:text-9xl z-10 h-full w-3/4 mx-auto text-center flex items-center justify-center text-white">
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
