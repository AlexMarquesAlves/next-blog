import { Header } from "../../components/Header";
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
      <Container>
        {posts.map((post) => (
          <h2 key={post.slug}>{post.title}</h2>
        ))}
      </Container>
    </>
  );
};
