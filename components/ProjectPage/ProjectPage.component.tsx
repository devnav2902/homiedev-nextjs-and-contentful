import React from "react";
import Style from "./ProjectPage.module.scss";

// import ImageRightSideAds from '../GAdsense/ImageRightSideAds';
import ProjectItem from "./ProjectItem.component";
import {
  Project,
  Projects,
} from "../../pages/javascript-projects-for-beginners";

export default function ProjectPage({ projects }: { projects: Project[] }) {
  return (
    <div className={Style["content-project"]}>
      <div className={Style["header-title"]}>
        <h1>
          <span role="img" aria-label="dev">
            🔥
          </span>{" "}
          Javascript Projects{" "}
          <span role="img" aria-label="dev">
            🌈
          </span>
        </h1>
      </div>
      <div className={Style.intro}>
        <p>
          Xin chào các bạn{" "}
          <span role="img" aria-label="dev">
            ✌
          </span>
          . Để giúp các bạn có thêm nguồn học Javascript thì hôm nay mình sẽ
          giới thiệu với các bạn những project để luyện Javascript.
        </p>
        <p>
          Dưới đây là các Project về Javascript ( <b>Sẽ tiếp tục Update</b> ).
          Mỗi ngày các bạn có thể làm một vài project. Khi hoàn thành xong những
          project này thì các bạn cũng nắm được kha khá về Javascript rồi đấy.
          Việc còn lại của chúng ta là tiếp tục học hỏi những thứ mới{" "}
          <span role="img" aria-label="dev">
            😁😁
          </span>{" "}
          .
          <br />
          <b>Chúc các bạn học vui vẻ</b>{" "}
          <span role="img" aria-label="dev">
            🔥
          </span>{" "}
        </p>
      </div>
      <div className={Style["project-list"]}>
        {projects.map((project, index) => {
          if ([0, 3, 4, 7, 9, 12, 15, 18].includes(index)) {
            return [
              //   <ImageRightSideAds key={project.id + index} />,
              <ProjectItem key={project.sys.id} project={project} />,
            ];
          }
          return <ProjectItem project={project} key={project.sys.id} />;
        })}
      </div>
    </div>
  );
}
