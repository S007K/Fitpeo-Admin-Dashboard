import SideBar from '../Sidebar'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="flex flex-row w-full bg-[#141416]">
            <SideBar />
            <div className="flex-1 overflow-auto h-screen">
                <Header />
                <Outlet />
                {/* this outlet is for receiving elements/components from routes written in layout element route */}
                {/* in this case dashboard will come here */}
            </div>
        </div>
    );
}

export default Layout
