import Image from 'next/image'
import { Inter } from 'next/font/google'
import DesktopSidebar from '@/components/DesktopSidebar'
import ArtistProfile from './artistProfile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
  <ArtistProfile />
 </>
  )
}
