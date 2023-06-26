import React, { useState, useEffect } from 'react';
import styles from './sidebar-desktop.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DesktopSidebar = () => {

  const router = useRouter(); 

  const [user, setUser] = useState({ name: '', accountType: '' });
  const [width, setWidth] = useState('');

  // useEffect(() => {
  //   if (width > 1000) {
  //     import("./sidebar-desktop.css");
  //   }
  // }, [width]);

  return (
    <>
      <div className="position-relative desktop">
        <div className={styles.sidebar}>
          <div className={`${styles['logo-details']}`}>
            <Link href={'/'}>
              {/* Add your logo or any other content here */}
            </Link>
          </div>
          <ul className={styles['nav-list']}>
            <li onClick={() => router.push("/ArtistProfile")}>
              <Link href={''}>
                <i className="bx bx-grid-alt"></i>
                <span className={styles['links_name']}>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <i className="bx bx-cloud-upload"></i>
                <span className={styles['links_name']}>UPLOAD</span>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <i className="bx bx-music"></i>
                <span className={styles['links_name']}>Music</span>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <i className="bx bx-album"></i>
                <span className={styles['links_name']}>Album</span>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <i className="bx bx-crown"></i>
                <span className={styles['links_name']}>Subscription</span>
              </Link>
            </li>
            <li>
              <Link href={''}>
                <i className="bx bx-cog"></i>
                <span className={styles['links_name']}>Settings</span>
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
        </div>
      </div>
    </>
  );
};

export default DesktopSidebar;
