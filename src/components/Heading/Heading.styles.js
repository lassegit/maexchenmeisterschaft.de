import styled, { css } from 'styled-components';

const base = css`
  font-weight: ${({ theme }) => theme.fontWeight.black};
  letter-spacing: 0.075em;
  text-transform: uppercase;
  line-height: normal;
`;

export const H1St = styled.h1`
  ${base};
  font-size: ${({ theme }) => theme.fontSize[38]};
`;

export const H2St = styled.h2`
  ${base};
  font-size: ${({ theme }) => theme.fontSize[28]};
`;

export const H3St = styled.h3`
  ${base};
  font-size: ${({ theme }) => theme.fontSize[18]};
`;

export const H4St = styled.h4`
  ${base};
  font-size: ${({ theme }) => theme.fontSize[16]};
`;