/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  `}
`;

export const PostCardCover = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    img {
      width: 100%;
      display: block;
    }
  `}
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
