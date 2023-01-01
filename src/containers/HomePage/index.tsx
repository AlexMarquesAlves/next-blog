import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { PostData } from "../../domain/posts/types";
import { HomeProps } from "../../pages";
import { Container } from "./styles";

export type HomePageProps = {
  posts: PostData[];
};

export const HomePage = ({ posts }: HomeProps) => {
  return (
    <>
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
