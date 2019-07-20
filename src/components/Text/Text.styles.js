import styled from 'styled-components';
import { space } from 'styled-system';

export const TextSt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) => theme.colors[color]};
  margin: 0 0 2rem 0;
  ${space};
`;
