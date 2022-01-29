import React, { useState } from "react";
import { fetchEntries } from "../contentful/utils";

// type Posts = {};

export type Tag = {
  fields: { name: string; url: string };
  sys: { id: string };
};

type Image = { fields: { file: { fileName: string; url: string } } };
export type Author = {
  fields: { author: string; avatar: { fields: { file: { url: string } } } };
};
// Index signatures [key: string]: {
export type Post = {
  date: string;
  url: string;
  title: string;
  description: string;
  tags: Tag[];
  image?: Image;
  video?: string;
  contentPost?: string;
  author?: Author;
  tableOfContents?: string;

  // sourcecode
};
export const PostsContext = React.createContext<Post[]>([]);
export default function AppWrapper({ children }) {
  const [posts, setPosts] = useState<Post[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      const entries = await fetchEntries("posts", 9);
      // console.log(entries);

      if (entries.items.length) {
        const dataPosts = entries.items.map(({ fields }): Post => {
          const {
            date,
            url,
            title,
            description,
            tags: rawTags,
            image: rawImage,
          } = fields;

          const tags = rawTags.map((item): Tag => {
            const {
              fields: { name, url },
              sys: { id },
            } = item;

            return { fields: { name, url }, sys: { id } };
          });

          return {
            date,
            url,
            title,
            description,
            tags,
            image: {
              fields: {
                file: {
                  fileName: rawImage.fields.file.fileName,
                  url: rawImage.fields.file.url,
                },
              },
            },
          };
        });
        setPosts(dataPosts);
        // console.log(dataPosts);

        // console.log(entries.items);
      }
    };
    fetch();
  }, []);

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
}
