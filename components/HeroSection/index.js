import style from "./style.module.css"
import Link from "next/link"

import DownArrow from "../../svg/DownArrow"
import RightArrow from "../../svg/RightArrow"


export default function HeroSection() {
    return (
        <div className={style.container}>
            <div className={style.body}>
                <span>Sol</span>
                <div className={style.line}>
                    <div className={style.content}>
                        <div className={style.Web}>
                            <h2>Web-sidor/Web-app</h2>
                            <p>Moderna Web teknology<br/>maximera användares uplevelse.</p>
                            <Link href="#" className={style.link}>Läs mer</Link>
                        </div>
                        <div className={style.design}>
                            <h2>UI/UX design</h2>
                            <p>Front-end design med stor<br/>forcusering på användarens uplevelse.</p>
                            <Link href="#" className={style.link}>Läs mer</Link>
                        </div>
                        <div className={style.Web}>
                            <h2>Mobil app</h2>
                            <p>Native cross-latform teknologi<br/>ger dig till gång till båda IOS och Android<br/>utan att riskera performens.</p>
                            <Link href="#" className={style.link}>Läs mer</Link>
                        </div>
                        <div className={style.system}>
                            <h2>IT-system</h2>
                            <p>Komplexa IT-system<br/>Automatisering, betalning, calculering, analisering . . .</p>
                            <Link href="#" className={style.link}>Läs mer</Link>
                        </div>
                    </div>
                    <div className={style.visionTop}>Våra</div>
                    <div className={style.visionLeft}>
                        <h4>VIS</h4>
                    </div>
                    <div className={style.visionRight}>
                        <h4>ION</h4>
                    </div>
                </div>
                <div className={style.righPart}>
                    <span>vee</span>
                    <div className={style.divier}></div>
                    <h2>Vi har lösning till dina<br/>IT-problem</h2>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.switch}>
                    <span>EN</span>
                    <div className={style.divider}></div>
                    <span>SWE</span>
                </div>
                <div className={style.social}>
                    <span>Instagram</span>
                    <div className={style.divider}></div>
                    <span>Tiktok</span>
                </div>
            </div>
            <span className={style.backgroundSol}>Sol</span>
            <span className={style.backgroundvee}>vee</span>
            <span className={style.backgroundVision}>VISION</span>
            <span className={style.sideSub}>LÖSNING FRÅN FRAMTIDEN</span>
            <div className={style.downArrow}>
                <div></div>
                <DownArrow />
            </div>
        </div>
    )
}
