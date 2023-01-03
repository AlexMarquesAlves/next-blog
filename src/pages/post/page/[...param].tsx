import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { HomePage } from "../../../containers/HomePage";
import { countAllPosts, getAllPosts } from "../../../data/posts";
import { PaginationData } from "../../../domain/posts/paginationTypes";
import { PostData } from "../../../domain/posts/types";

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>
  if (!posts.length) return <div>Página não encontrada...</div>

  return <HomePage posts={posts} category={category} pagination={pagination} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || ``;
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : ``;
  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`
  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts(categoryQuery));
  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPosts,
    postsPerPage,
    category,
  }

  return {
    props: { posts, pagination, category },
    revalidate: 600,
  };
};
