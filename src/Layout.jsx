import { Outlet, NavLink } from "react-router"
import './assets/all.css'

function Layout() {
    const activeClass = ({ isActive }) => {
        return (isActive ? 'linkIsActive' : '')
    }

    return (
        <>
        <nav>導覽列
        <NavLink to="">首頁</NavLink> |
        <NavLink to="/about" className={activeClass}>About</NavLink> |
        <NavLink to="/event" className={activeClass}>活動頁面</NavLink> |
        <NavLink to="/people" className={activeClass}>很多人</NavLink> |
        <NavLink to="/products" className={activeClass}>產品列表</NavLink>
        </nav>
        <Outlet />
        <footer>頁腳</footer>
        </>
    )

}

export default Layout