import React from "react";
import Style from "./social.module.scss";
import Youtube from "../../public/svg/youtube";
import Instagram from "../../public/svg/instagram";
import Github from "../../public/svg/github";
import Facebook from "../../public/svg/facebook";

function Social() {
  return (
    <div className={Style["social-box"]}>
      <ul className={Style.socials}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCLphTurxkwnUZpOAPXSjw0g"
          className={Style.social}
        >
          <Youtube />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/himdevnav/"
          className={Style.social}
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/devnav2902/"
          className={Style.social}
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/devnav2902"
          className={Style.social}
        >
          <Github />
        </a>
      </ul>
    </div>
  );
}

export default Social;
