import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    padding: ${theme.spacings.medium} 0;
  `}
`;
