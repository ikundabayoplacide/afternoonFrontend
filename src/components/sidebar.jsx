import { NavLink } from "react-router-dom";


const links = [
    { label: 'Users', path: '/dashboard/users' },
    { label: 'Orders', path: '/dashboard/Orders' },
    { label: 'Products', path: '/dashboard/products' },
    { label: 'Shops', path: '/dashboard/shops' }
]

const bottonLinks = [
    { label: 'Notifications', path: '/dashboard/notifications' },
    { label: 'Settings', path: '/dashboard/settings' }
]

const ActivateLinks = ({ isActive }) => `flex items-center py-2 px-5 transitions-colors ${isActive ? 'text-white bg-blue-400 hover:bg-blue-700' : 'text-blue-400'
    }`;


export default function Sidebar() {
    return (
        <aside className="w-60 bg-blue-900 flex flex-cols">
            <div className="px-4 py-5 text-2xl font-bold text-white ">
                <p className="">BigSHOP  </p>
                <nav className=" py-4 px-2 gap-1 flex-1">
                    {links.map((link) => (
                        <NavLink key={link.path} to={link.path} className={ActivateLinks}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <div className=" py-2 border-t gap-1">
                    {bottonLinks.map((bottonLInk) => (
                        <NavLink key={bottonLInk.path} to={bottonLInk.path} className={ActivateLinks}>
                            {bottonLInk.label}
                        </NavLink>
                    ))}
                </div>
            </div>

        </aside>
    )
}