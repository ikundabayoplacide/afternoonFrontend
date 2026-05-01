import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function Dashboard() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-[#f0f4f8]">
                <div className="p-8 flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
