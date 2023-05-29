import { useRouter } from "next/router";
import React from "react";
import { Post, getAllPosts, getOnePost } from "../../../services/post";

interface PropsType {
  post: Post;
}

export default function PostPage({ post }: PropsType) {
  const { query, back } = useRouter();

  const goBack = () => {
    back();
  };

  return (
    <div>
      <div>Id: {query.id}</div>
      <div>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
        <div>id from posts: {post.id}</div>
        {/* <Image
          src={`https://source.unsplash.com/random/200x200?sig=${query.id}`}
          alt="Random image"
          width={200}
          height={200}
          quality={1}
        /> */}
        <button onClick={goBack}>Go back</button>
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const post = await getOnePost(context.params.id);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false,
  };
}
