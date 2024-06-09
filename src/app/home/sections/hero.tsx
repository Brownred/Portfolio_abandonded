import { Button } from "@nextui-org/react"
import { CalendarIcon } from "./CalenderIcon"


const Hero = () => {
  return (
    <section className="w-full bg-ghostWhite container">

        {/* hero div container */}
        <div className="py-12">

            {/* Info container */}
            <div className="">

                {/* Greetings */}
                <div className="flex gap-4 mb-2 items-center">
                    <img src="/hi.png" alt="greetings or waving hand emoji" width={40} height={40} />
                    <h2 className="latoh3">Hi, I'm <span>Lenox Miheso</span></h2>
                </div>

                {/* Title */}
                <h1 className="latoh1">Software Engineer</h1>

                {/* Short intro */}
                <p className="mt-10">I seek to push the limits of creativity to create high engaging, user friendly, and memorable interactive experirences.</p>

                {/* Socials */}
                <div className="flex items-center gap-2 mt-4 mb-8">
                    <img src="/ig.svg" alt="" width={35} height={35} />
                    <img src="/twitter.svg" alt="" width={35} height={35} />
                    <img src="/linkedin.svg" alt="" width={35} height={35} />
                </div>

                {/* Call to action */}
                <div className="w-full flex flex-col gap-3">
                    <Button size="lg" color="primary" radius="full" startContent={<CalendarIcon/>}>Book Meeting</Button>
                    <Button size="lg" color='primary' variant="bordered" radius="full">View Portfolio</Button>
                </div>

            </div>

            {/* Image Container */}
            

        </div>

    </section>
  )
}

export default Hero