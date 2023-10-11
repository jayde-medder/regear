import React from 'react'
import '../../public/styles/Marquee.css'

export default function Marquee() {
  return (
    <>
      <div className="marquee">
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className="item-text">30KG OF HARDWARE REPURPOSED</span>
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
          <div className="marquee-item">
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className="item-text">
              40 ITEMS AVAILABLE IN OUR HARDWARE LIBRARY
            </span>
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
        </div>
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className="item-text">30KG OF HARDWARE REPURPOSED</span>
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
          <div className="marquee-item">
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className="item-text">
              40 ITEMS AVAILABLE IN OUR HARDWARE LIBRARY
            </span>
            <span className="img-wrapper">
              <img
                id="img"
                src="../../public/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
