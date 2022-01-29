import React from "react";
import Image from "next/image";
import Style from "./ProjectPage.module.scss";
import { Project } from "../../pages/javascript-projects-for-beginners";

export default function ProjectItem({ project }: { project: Project }) {
  const {
    fields: {
      linkTutorial,
      title,
      thumbnail: {
        fields: {
          file: { url },
        },
      },
      sourcecode,
    },
  } = project;

  return (
    <div className={Style.project}>
      <div className={Style.project__info}>
        {linkTutorial ? (
          <a
            target="_blank"
            rel="noreferrer"
            className={`${Style.tutorial} ${Style.title} truncate"`}
            href={`https://homiedev.com/${linkTutorial.fields.url}`}
            title={title}
          >
            <h2>{title}</h2>
          </a>
        ) : (
          <h2 className={`${Style.title} truncate`} title={title}>
            {title}
          </h2>
        )}

        <div className={Style["project__info-footer"]}>
          <a
            href={sourcecode}
            target="_blank"
            rel="noreferrer"
            className={Style.download}
          >
            Tải xuống
          </a>
        </div>
      </div>
      <div className={Style.project__thumbnail}>
        <a
          target={linkTutorial ? "_blank" : ""}
          rel="noreferrer"
          href={
            linkTutorial
              ? `https://homiedev.com/${linkTutorial.fields.url}`
              : "#"
          }
        >
          <Image
            objectFit="cover"
            alt={title}
            src={"https:" + url}
            layout="fill"
          />
        </a>
      </div>
    </div>
  );
}
