import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.superLarge} 0;
  `}
`;
