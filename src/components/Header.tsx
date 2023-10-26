import styles from "./Header.module.css";
import logo from "../assets/Marvel_Logo.svg.png";


export function Header() {
    return (
        <div className={styles.headerBorderShadow}>
            <div className="container mx-auto flex justify-center items-center pt-3 pb-3 text-center">
                <div className="">
                    <img src={logo} alt="" className={styles.logo} />
                    Comic compendium
                </div>
                <div className={styles.about_button}>
                    <a href="/about" > About </a>
                    <a href="/" > Comics </a>
                </div>
                 
            </div>
        </div>
        
    )
}