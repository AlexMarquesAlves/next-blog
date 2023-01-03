import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.large} 0;
  `}
`;

export const PreviousLink = styled.div`
  ${({ theme }) => css``}
`;

export const NextLink = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
  `}
`;
