import React from 'react'
import MobileSideBar from './MobileSidebar'
import DesktopSidebar from './DesktopSidebar'
const Sidebar = () => {
  return (
    <>
    <div>
      <div className="d-block d-lg-none">
        <MobileSideBar />
      </div>
      <div className="d-none d-lg-block">
        <DesktopSidebar />
      </div>
    </div>
  </>
  )
}

export default Sidebar