import React from "react";
import Layout from "../components/Layout/Layout.component";
import ProjectPage from "../components/ProjectPage/ProjectPage.component";
// import Seo from "../component/seo";
import { client } from "../contentful/utils";
import { GetStaticProps } from "next";

export type Project = {
  fields: {
    date: string;
    thumbnail: { fields: { file: { url: string } } };
    title: string;
    sourcecode: string;
    linkTutorial?: { fields: { url: string } };
  };
  sys: { id: string };
};

export type Projects = {
  items: Project[];
};

export default function JsProjectPage({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      {/* <Seo
        title="Javascript Projects For Beginners"
        image="//images.ctfassets.net/o8rbhyyom3pw/3f9uKDlksJUCVKZtVec55r/fde06afdc3c464062e20b92365a29669/ProjectThumbnail.png"
        titleSample={true}
      /> */}
      <ProjectPage projects={projects} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const entries: Projects = await client.getEntries({
    content_type: "projectJs",
    limit: 50,
  });

  const projects = entries.items.map((project): Project => {
    const { fields, sys } = project;

    return {
      fields: {
        date: fields.date,
        thumbnail: {
          fields: { file: { url: fields.thumbnail.fields.file.url } },
        },
        title: fields.title,
        sourcecode: fields?.sourcecode ?? "",
        linkTutorial: {
          fields: { url: fields?.linkTutorial?.fields?.url ?? "" },
        },
      },
      sys: { id: sys.id },
    };
  });

  return { props: { projects } };
};
