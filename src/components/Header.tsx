import styles from "./Header.module.css";


export function Header() {
    return (
        <div className={styles.headerBorderShadow}>
            <div className="container mx-auto flex pt-3 pb-3">
                Project Header
            </div>
        </div>
        
    )
}