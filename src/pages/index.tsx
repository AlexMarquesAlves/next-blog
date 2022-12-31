import { GetStaticProps } from "next";
import { HomePage } from "../containers/HomePage";
import { getAllPosts } from "../data/posts";
import { PostData } from "../domain/posts/types";

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <HomePage posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    // revalidate: 5,
  };
};
