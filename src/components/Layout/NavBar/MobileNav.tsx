import Link from "next/link";
import React from "react";
import styles from "styles/LandingPage/Landing.module.css";


import {
  MenuItem,
  NavMenu,
} from "./nav.styles";

type TNav = {
  isOpen: boolean;
  toggle: () => void;
};

const MobileNavBar = ({ toggle, isOpen, ...props}: TNav | any) => {
  return (
    <>
      {/* <!--  mobile nav --> */}
      <nav
        className={styles.mobileMenu}
        onClick={toggle}
        isOpen={isOpen as boolean}
        {...props}
      >
        <NavMenu>
          <MenuItem>
            {" "}
            <Link href="/courses">Courses</Link>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="/articles">Articles</Link>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="/books">Books</Link>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Link href="/forum">Forum</Link>{" "}
          </MenuItem>
        </NavMenu>
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
      </nav>
    </>
  );
};

export default MobileNavBar;
