import styles from './Marquee.module.css'

export default function Marquee() {
  return (
    <>
      <div className={styles['marquee']}>
        <div className={styles['marquee-content']}>
          <div className={styles['marquee-item']}>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className={styles['item-text']}>
              30KG OF HARDWARE REPURPOSED
            </span>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
          <div className={styles['marquee-item']}>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className={styles['item-text']}>
              40 ITEMS READY TO <b>BORROW</b>
            </span>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
        </div>
        <div className={styles['marquee-content']}>
          <div className={styles['marquee-item']}>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className={styles['item-text']}>
              30KG OF HARDWARE REPURPOSED
            </span>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/about.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
          <div className={styles['marquee-item']}>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
            <span className={styles['item-text']}>
              40 ITEMS READY TO <b>BORROW</b>
            </span>
            <span className={styles['img-wrapper']}>
              <img
                id={styles.img}
                src="/images/svg/onlinecom.svg"
                alt="About Re:Gear Icon"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
