import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import styles from './sidebar-mobile.module.css'
// import Cookies from "universal-cookie";

import Link from "next/link";

function MobileSideBar() {
  const [user, setUser] = useState({ name: "", accountType: "" });
  const router = useRouter();
  const [width, setWidth] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    // const cookies = new Cookies();

    setWidth(window.innerWidth);
    let sidebar = document.querySelector(".sidebar");

    let closeBtn = document.querySelector("#btn");

    let userName = ""; // Define userName variable
    let accountType = ""; // Define accountType variable

    if (userName) {
      setUser({
        name: userName,
        accountType: accountType,
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange(); //calling the function(optional)
      });
    }
    // following are the code to change sidebar button(optional)
  }, []);

  const menuBtnChange = () => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the icons class
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the icons class
    }
  };

  // const logout = () => {
  //   const cookies = new Cookies();
  //   cookies.remove("auth_token");
  //   cookies.remove("user");
  //   cookies.remove("user_name");
  //   cookies.remove("account_type");
  //   router.push("/login");
  // };

  const toggleMenu = () => {
    $(".toggle-menu").toggleClass("bx-x");

    $(".toggle-menu").css({
      "margin-left": "4rem",
    });

    $(".sidebar").css({ "margin-left": 0 });
  };

  useEffect(() => {
    if (width < 1000) {
      dynamic(() => import("./sidebar-mobile.module.css"));
    }
  }, [width]);

  return (
    <>
      <div
        className="burger-menu mt-0 py-2 d-flex align-items-center justify-content-between d-lg-none"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <i
          className={
            toggleSidebar
              ? "fa-solid fa-times bx-menu fs-1"
              : "bx bx-menu toggle-menu fs-1"
          }
          style={{ marginLeft: toggleSidebar ? "4rem" : "0" }}
        ></i>

        <Link href="/">
          {/* <img
            width="80"
            src={ImagePath?.icLogo}
            alt=""
            className="img-fluid mx-4"
          /> */}
        </Link>
      </div>

      <div
        className={`sidebar ${width > 992 ? "" : ""}`}
        style={{ left: toggleSidebar || width > 992 ? "0" : "-78px" }}
      >
        <div className="logo-details d-none d-lg-block">
          {/* <img src={ImagePath?.icLogo} alt="" className="img-fluid" /> */}

          {/* <div className="logo_name">Emergence</div>
                        { 
                            width < 768 && 
                            <i className="fa-solid fa-bars bx-menu" id="btn" ></i>
                        
                        } */}
        </div>
        <ul className="nav-list">
          <li>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={router.pathname === "/dashboard" ? "active" : ""}
              href="/dashboard"
            >
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={router.pathname === "/upload-music" ? "active" : ""}
              href="/upload-music"
            >
              <i className="bx bx-cloud-upload"></i>
              <span className="links_name">Upload Music</span>
            </Link>
            <span className="tooltip">Upload Music</span>
          </li>
          <li>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={router.pathname === "/musics" ? "active" : ""}
              href="/musics"
            >
              <i className="bx bx-music"></i>
              <span className="links_name">Music</span>
            </Link>
            <span className="tooltip">Music</span>
          </li>
          <li>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={router.pathname === "/albums" ? "active" : ""}
              href="/albums"
            >
              <i className="bx bx-album"></i>
              <span className="links_name">EP / Albums</span>
            </Link>
            <span className="tooltip">EP / Albums</span>
          </li>
          <li>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={router.pathname === "/subscription" ? "active" : ""}
              href="/subscription"
            >
              <i className="bx bx-crown"></i>
              <span className="links_name">Subscriptions</span>
            </Link>
            <span className="tooltip">Subscriptions</span>
          </li>
          <li>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              className={router.pathname === "/settings" ? "active" : ""}
              href="/settings"
            >
              <i className="bx bx-cog"></i>
              <span className="links_name">Settings</span>
            </Link>
            <span className="tooltip">Settings</span>
          </li>

          <li>
            {/* <Link href="#" onClick={logout}>
              <i className="bx bx-log-in"></i>
              <span className="links_name">Log Out</span>
            </Link> */}
            <span className="tooltip">Log Out</span>
          </li>
          {user?.name && (
            <li
              className="profile"
              style={{ left: toggleSidebar || width > 992 ? "0" : "-78px" }}
            >
              <div className="profile-details logout-sec">
                {/* {user?.accountType === "free" ? (
                  <img src={ImagePath?.freeProfileLogo} />
                ) : (
                  <img src={ImagePath?.paidProfileLogo} />
                )} */}
                <div className="links_name p-2">
                  {/* <p className="text-wrap small">{user?.name}</p> */}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default MobileSideBar;
