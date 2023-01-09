import Link from 'next/link';
import React from 'react'
import { FaBars } from "react-icons/fa";
import { LogoShape } from "../../../../public/assets/icons/LogoShape";
import styles from "styles/LandingPage/Landing.module.css";

import {
  MenuItem,
  NavMenu,
  MenuMobIcon,
  NavLogo,
} from "./nav.styles";
// import MobileNavBar from './MobileNav';

const NavigationBar = ({ toggle }: any) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* <!-- logo --> */}
          <Link href="/">
            <NavLogo className={styles.col}>
              <LogoShape color="#5634bf" width="40" height="40" />
            </NavLogo>
          </Link>

          {/* <!-- Nav --> */}
          <div className={`${styles.col} ${styles.mobileHide}`}>
            <nav className={styles.navDesktop}>
              <NavMenu>
                <MenuItem>
                  <Link href="/courses">Courses</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/articles">Articles</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/books">Books</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/forum">Forum</Link>
                </MenuItem>
              </NavMenu>
            </nav>
          </div>
          {/* <!-- Action link --> */}
          <div className={`${styles.col} ${styles.mobileHide}`}>
            <div className={styles.actionLink}>
              <Link href="/auth/signin">
                <button className={`${styles.btn} ${styles.btnLogin}`}>
                  Login
                </button>
              </Link>

              <Link href="/auth/signup">
                <button
                  className={`${styles.btn} ${styles.btnPrimery} ${styles.register}`}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
          <MenuMobIcon onClick={toggle}>
            <FaBars style={{ color: "black" }} />
          </MenuMobIcon>
        </div>
      </div>
      {/* <!--  mobile nav --> */}
      {/* <MobileNavBar /> */}
    </header>
  );
};

export default NavigationBar



