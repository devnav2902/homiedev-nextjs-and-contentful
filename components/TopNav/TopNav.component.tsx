import React from "react";
import Link from "next/link";
import NavPhone from "../NavPhone/NavPhone.component";
import Style from "./TopNav.module.scss";
import Logo from "../../public/svg/HomiedevLogo";
import Social from "../Social/Social.component";

export default function TopNav() {
  return (
    <nav className={Style["nav-top"]}>
      <div className={Style.wrapper}>
        <div className={Style.logoWrapper}>
          <Link href="/">
            <a>
              <Logo className={Style.logo} />
            </a>
          </Link>
        </div>
        <div className={Style["nav-box"]}>
          <Link href="/about/">
            <a className={Style.item}>About</a>
          </Link>
          <Link href="/posts/1">
            <a className={Style.item}>Bài viết</a>
          </Link>
          <Link href="/javascript-projects-for-beginners/">
            <a className={Style.item}>30 days of JavaScript</a>
          </Link>
          <Link href="/tags/">
            <a className={Style.item}>Tags</a>
          </Link>
          <Link href="/discuss/">
            <a className={Style.item}>Discuss</a>
          </Link>
        </div>
        <NavPhone />
        <Social />
      </div>
    </nav>
  );
}
