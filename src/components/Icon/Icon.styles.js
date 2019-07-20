import styled from 'styled-components';
import { space } from 'styled-system';

export const SVGSt = styled.svg`
  display: inline-block;
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  transform: rotate(${({ rotation }) => rotation});
  fill: ${({ fill, theme }) => theme.colors[fill]};
  fill-rule: ${({ fillRule }) => fillRule};
  ${space};
`;
