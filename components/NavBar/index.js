import style from "./style.module.css"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <div className={style.icon}></div>
                <span>MENU</span>
            </div>
            <Link href="#">
                <div className={style.logo}>
                    <span>//</span>
                    <h2>Solvee</h2>
                </div>
            </Link>
            <div className={style.contact}>
                <span>Contact</span>
                <div></div>
            </div>
        </div>
    )
}
