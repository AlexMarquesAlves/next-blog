import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPost } from "../../data/posts";
import { countAllPosts } from "../../data/posts/count-all-posts";
import { PostData } from "../../domain/posts/types";

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return (
    <>
      <p>{post.title}</p>
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </>
  );
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};
