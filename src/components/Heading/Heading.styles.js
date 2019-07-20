import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const base = css`
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) => theme.colors[color]};
  letter-spacing: 0.075em;
  text-transform: uppercase;
  line-height: normal;
  ${space};
`;

export const H1St = styled.h1`
  ${base};
  font-size: ${({ theme }) => theme.fontSizes[38]};
`;

export const H2St = styled.h2`
  ${base};
  font-size: ${({ theme }) => theme.fontSizes[28]};
`;

export const H3St = styled.h3`
  ${base};
  font-size: ${({ theme }) => theme.fontSizes[18]};
`;

export const H4St = styled.h4`
  ${base};
  font-size: ${({ theme }) => theme.fontSizes[16]};
`;
