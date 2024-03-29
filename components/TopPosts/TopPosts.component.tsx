import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "./TopPosts.module.scss";
import PostStyle from "../Post/Post.module.scss";
import { client } from "../../contentful/utils";
import { Post } from "../../context/state";
// import TextAds from '../GAdsense/TextAds';

export default function TopPosts() {
  const [topPosts, setTopPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const entries = await client.getEntries({
        content_type: "topArticles",
        limit: 5,
      });

      if (entries.items.length) {
        const { posts }: { posts: { fields: Post }[] } = entries.items[0]
          .fields as { posts: { fields: Post }[] };
        // console.log(posts);

        const data = posts.map((post): Post => {
          const { title, url, image, date, tags, description } = post.fields;
          return { title, url, image, tags, date, description };
        });
        setTopPosts(data);
      }
    };

    fetch();
  }, []);

  return (
    <div className={Style["top-posts"]}>
      {topPosts.map((post, i) => {
        if (i === 0 || i === 3) {
          return [
            // <TextAds key={post.id + i} className="post cnt" />,
            <article
              key={i}
              className={`${Style.post} ${Style.cnt} ${PostStyle.post}`}
            >
              <h3 className={`${PostStyle.title} ${Style.title}`}>
                <Link href={`/${post.url}/`}>{post.title}</Link>
              </h3>
            </article>,
          ];
        }
        return (
          <article
            key={i}
            className={`${Style.post} ${Style.cnt} ${PostStyle.post}`}
          >
            <h3 className={`${PostStyle.title} ${Style.title}`}>
              <Link href={`/${post.url}/`}>{post.title}</Link>
            </h3>
          </article>
        );
      })}
    </div>
  );
}
