import { Date } from "../Date";
import { Container } from "./styles";

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, date, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado por <Date date={date} /> por {author} em {category}
    </Container>
  );
};
