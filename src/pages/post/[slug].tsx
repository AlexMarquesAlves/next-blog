import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { Post } from "../../containers/Post";
import { getAllPosts, getPost } from "../../data/posts";
import { countAllPosts } from "../../data/posts/count-all-posts";
import { PostData } from "../../domain/posts/types";

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Página ainda carregando, por favor aguarde...</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts[0] },
    revalidate: 60,
  };
};
