import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { SITE_NAME } from "../../config/app-config";
import { PostData } from "../../domain/posts/types";
import { HomeProps } from "../../pages";
import { Container } from "./styles";

export type HomePageProps = {
  posts: PostData[];
};

export const HomePage = ({ posts }: HomeProps) => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu blog de tecnologia" />
      </Head>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};
