import style from "./Sidebar.module.css";


export function Sidebar() {

    return (
        <ul className={ style.menuSidebar }>
            <li><a href="/">  Comic list </a></li>
            <li><a href="/characters">  Character list </a></li>
        </ul>
    )

}