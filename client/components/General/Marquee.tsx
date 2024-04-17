import { Marquee as Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'

export default function MarqueeContainer() {
  return (
    <>
      <Marquee
        fade={false}
        direction="left"
        reverse={false}
        pauseOnHover={true}
        className="mx-10 border border-black gap-[4rem] [--duration:30s]" // pass class to change gap or speed
        innerClassName="gap-[4rem] [--gap:4rem]" // pass class to change gap or speed
      >
        <div className="flex flex-row gap-4 items-center">
          <div>
            <img
              src="/images/svg/about.svg"
              alt="About Re:Gear Icon"
              className="h-7"
            />
          </div>
          <div className="pb-0.5">30KG OF HARDWARE REPURPOSED</div>
          <div>
            <img
              src="/images/svg/about.svg"
              alt="About Re:Gear Icon"
              className="h-7"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <img
              src="/images/svg/onlinecom.svg"
              alt="About Re:Gear Icon"
              className="h-7"
            />
          </div>
          <div className="pb-0.5">
            40 ITEMS READY TO <b>BORROW</b>
          </div>
          <div>
            <img
              src="/images/svg/onlinecom.svg"
              alt="About Re:Gear Icon"
              className="h-7"
            />
          </div>
        </div>
      </Marquee>
    </>
  )
}
