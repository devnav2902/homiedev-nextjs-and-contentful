import React from "react";
import Style from "./Bio.module.scss";
import Image from "next/image";

type Bio = {
  photo: string;
};
export default function Bio({ photo }: Bio) {
  return (
    <section className={Style["bio-section"]}>
      <div className={Style.profile}>
        <div className={Style["profile-image"]}>
          <Image src={"https:" + photo} layout="fill" alt="devnav" />
        </div>

        <div className={Style.summary}>
          <h1 className={Style.title}>
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            Devnav Creator Bio
          </h1>
          <p>
            <span role="img" aria-label="smile">
              😁😁
            </span>
            Hi, I&apos;m @devnav. Một người thích chia sẻ kiến thức, đặc biệt là
            về Front-end 🚀.
          </p>
          <div className={Style["social-box"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCLphTurxkwnUZpOAPXSjw0g"
            >
              Youtube
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/himdevnav/"
            >
              Facebook
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/devnav2902/"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/devnav2902"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
