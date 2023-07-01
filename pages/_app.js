import DesktopSidebar from '@/components/DesktopSidebar'
import '@/styles/globals.css'
import "../sass/_em-artistProfile.module.scss";
import Sidebar from '@/components/Sidebar';
import Desktop from '@/components/Desktop';

export default function App({ Component, pageProps }) {
  return (
    <div className='flex'>
        {/* <Sidebar /> */}
        <DesktopSidebar />
      <Component {...pageProps} />
    </div>
  )
}
