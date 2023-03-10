import { GetServerSideProps } from "next";
import { HomePage } from "../../containers/HomePage";
import { getAllPosts } from "../../data/posts";
import { PostData } from "../../domain/posts/types";

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return (
    <>
      <HomePage posts={posts} category={category} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category: ctx.query.category },
    // revalidate: 5,
  };
};
