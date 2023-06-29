import DesktopSidebar from '@/components/DesktopSidebar'
import '@/styles/globals.css'
import "../sass/_em-artistProfile.module.scss";
import Sidebar from '@/components/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <div className='flex'>
        <Sidebar />
        {/* <DesktopSidebar /> */}
      <Component {...pageProps} />
    </div>
  )
}
