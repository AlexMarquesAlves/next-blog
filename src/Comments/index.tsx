import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styles";

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname={"duque-next-blog"}
        config={{
          url: `/post/${slug}`,
          identifier: slug,
          title: title,
          language: "pt_BR",
        }}
      />
    </Container>
  );
};
