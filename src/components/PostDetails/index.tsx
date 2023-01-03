import Link from "next/link";
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
      Publicado em <Date date={date} /> por {author} |{" "}
      <Link as={`/post/page/1/${category.toLowerCase()}`} href={'/post/page/[...param]'} >{category}</Link>
    </Container>
  );
};
