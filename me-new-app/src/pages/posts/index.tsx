import React, { useEffect, useState } from "react";
import { Post, getAllPosts } from "../../../services/post";
import Link from "next/link";

interface PropsType {
  posts: Post[];
}

export default function Main({ posts }: PropsType) {
  const [filterData, setFilterData] = useState<string>("");

  const changeFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData(event.target.value);
  };

  return (
    <div>
      <h1>Posts</h1>
      <input
        placeholder="search"
        value={filterData}
        onChange={changeFilterData}
      />
      {posts
        .filter(({ title }) => title.includes(filterData))
        .map((item) => (
          <div>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
