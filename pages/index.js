import Image from 'next/image'
import { Inter } from 'next/font/google'
import DesktopSidebar from '@/components/DesktopSidebar'
import ArtistProfile from './artistProfile'

import Artists from './artists'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>

<Login />
 

 </>
  )
}
