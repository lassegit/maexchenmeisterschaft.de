import styled from 'styled-components';
import { space } from 'styled-system';

export const TextSt = styled.p`
  font-size: ${({ theme }) => theme.fontSize[16]};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) => theme.color[color]};
  margin: 0 0 2rem 0;
  ${space};
`;
