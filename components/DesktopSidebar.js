import React, { useState, useEffect } from "react";
import styles from "./sidebar-desktop.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const DesktopSidebar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [icon, setIcon] = useState(<AiOutlineMenu className="text-2xl text-white " />);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIcon(isSidebarOpen ? <AiOutlineMenu className="text-2xl text-whitebg-black" /> : <AiOutlineClose className="text-2xl text-white " />);
  };


  return (
    <>
      <button
        type="button"
        className="fixed top-0 left-0 backdrop-blur-sm z-50 p-2 mt-1 ml-3 text-sm text-white rounded-lg sm:hidden "
        onClick={toggleSidebar}
      >
        {icon}
      </button>

      <div className={`${styles.sidebar}`}>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  ${
          isSidebarOpen ? "" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  text-gray-800 bg-[#201a2c] hover:bg-[#201a2c] border-[#35235a] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group overflow-y-hidden">

        <ul className={styles['nav-list']}>
             <li>
               <Link href="/artistProfile">
                 <i className="bx bx-grid-alt"></i>
                 <span className={styles['links_name']}>Dashboard</span>
               </Link>
             </li>
             <li>
               <Link href="/EMAC">
                 <i className="bx bx-cloud-upload"></i>
                 <span className={`${styles['links_name']} `}>Emac</span>
               </Link>
             </li>
             <li>
               <Link href="/artists">
                 <i className="bx bx-music"></i>
                 <span className={styles['links_name']}>Artist</span>
               </Link>
             </li>
             <li>
               <Link href="/MusicDetails">
                 <i className="bx bx-album"></i>
                 <span className={styles['links_name']}>MusicDetails</span>
               </Link>
             </li>
             <li>
               <Link href="/Subscription">
                 <i className="bx bx-crown"></i>
                 <span className={styles['links_name']}>Subscription</span>
               </Link>
             </li>
             <li>
               <Link href="/blog">
                 <i className="bx bx-cog"></i>
                 <span className={styles['links_name']}>Blogs</span>
               </Link>
             </li>
             <li>
               <Link href={''} type="button">
                 <i className="bx bx-log-in"></i>
                 <span className={styles['links_name']}>Log Out</span>
               </Link>
             </li>
             <li className={`${styles['profile']}`}>
               <div className={`${styles['profile-details']} logout-sec`}>
                 <div className={`${styles['links_name']} p-2`}>
                   <p className="text-wrap small">Hemlo</p>
                 </div>
               </div>
             </li>
           </ul>

          {/* <ul className="space-y-2 font-medium mt-6"> */}
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  E-commerce
                </span>
                <svg
                  sidebar-toggle-item
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li> */}
          {/* </ul> */}
        </div>
      </aside>
      </div>

    </>
  );
};

export default DesktopSidebar;

// import React, { useState, useEffect } from 'react';
// import styles from './sidebar-desktop.module.css';
// import Link from 'next/link';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';

// const DesktopSidebar = () => {

//   const router = useRouter();

//   const [user, setUser] = useState({ name: '', accountType: '' });
//   const [width, setWidth] = useState('');

//   useEffect(() => {
//     if (width < 1000) {
//       dynamic(() => import("./sidebar-mobile.module.css"));
//     }
//   }, [width]);

//   return (
//     <>
//       <div className="position-relative desktop">
//         <div className={styles.sidebar}>
//           <div className={`${styles['logo-details']}`}>
//             <Link href={'/'}>
//               {/* Add your logo or any other content here */}
//             </Link>
//           </div>
//           <ul className={styles['nav-list']}>
//             <li>
//               <Link href="/artistProfile">
//                 <i className="bx bx-grid-alt"></i>
//                 <span className={styles['links_name']}>Dashboard</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/EMAC">
//                 <i className="bx bx-cloud-upload"></i>
//                 <span className={styles['links_name']}>Emac</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/artists">
//                 <i className="bx bx-music"></i>
//                 <span className={styles['links_name']}>Artist</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/MusicDetails">
//                 <i className="bx bx-album"></i>
//                 <span className={styles['links_name']}>MusicDetails</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/Subscription">
//                 <i className="bx bx-crown"></i>
//                 <span className={styles['links_name']}>Subscription</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog">
//                 <i className="bx bx-cog"></i>
//                 <span className={styles['links_name']}>Blogs</span>
//               </Link>
//             </li>
//             <li>
//               <Link href={''} type="button">
//                 <i className="bx bx-log-in"></i>
//                 <span className={styles['links_name']}>Log Out</span>
//               </Link>
//             </li>
//             <li className={`${styles['profile']}`}>
//               <div className={`${styles['profile-details']} logout-sec`}>
//                 <div className={`${styles['links_name']} p-2`}>
//                   <p className="text-wrap small">Hemlo</p>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DesktopSidebar;
