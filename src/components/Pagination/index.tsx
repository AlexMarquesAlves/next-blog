import * as Styled from './styles';

export type PaginationProps = {
  title?: string;
};

export const Pagination = ({ title }: PaginationProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
