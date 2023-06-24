import DesktopSidebar from '@/components/DesktopSidebar'
import '@/styles/globals.css'
import "../sass/_em-artistProfile.module.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className='flex'>
        <DesktopSidebar />
      <Component {...pageProps} />
    </div>
  )
}
