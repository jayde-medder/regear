import { Marquee as Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'

export default function StatsMarquee() {
  return (
    <Marquee
      fade={false}
      direction="left"
      reverse={false}
      pauseOnHover={true}
      className="border-black bg-black font-extralight text-white gap-[3rem] [--duration:30s]" // pass class to change gap or speed
      innerClassName="gap-[3rem] [--gap:3rem]" // pass class to change gap or speed
    >
      <div className="flex flex-row gap-2 items-center">
        <div>
          <img
            src="/images/svg/about.svg"
            alt="About Re:Gear Icon"
            className="h-5"
          />
        </div>
        <p className="text-sm">30KG OF HARDWARE REPURPOSED</p>
        <div>
          <img
            src="/images/svg/about.svg"
            alt="About Re:Gear Icon"
            className="h-5"
          />
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>
          <img
            src="/images/svg/onlinecom.svg"
            alt="About Re:Gear Icon"
            className="h-5"
          />
        </div>
        <p className="text-sm">
          40 ITEMS READY TO <b>BORROW</b>
        </p>
        <div>
          <img
            src="/images/svg/onlinecom.svg"
            alt="About Re:Gear Icon"
            className="h-5"
          />
        </div>
      </div>
    </Marquee>
  )
}
