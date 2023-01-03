import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { Pagination } from "../../components/Pagination";
import { PostCard } from "../../components/PostCard";
import { SITE_NAME } from "../../config/app-config";
import { PaginationData } from "../../domain/posts/paginationTypes";
import { PostData } from "../../domain/posts/types";
import { Category, Container } from "./styles";

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData | any;
};

export const HomePage = ({ posts, category, pagination }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta name="description" content="Este é meu blog de tecnologia" />
      </Head>
      <Header />

      {category && <Category>Categoria: {category}</Category>}

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
        <Pagination {...pagination} />
      </MainContainer>
      <Footer />
    </>
  );
};
