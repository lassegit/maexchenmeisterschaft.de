import styled from 'styled-components';
import { space } from 'styled-system';

export const MainSt = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto 100px auto;
  padding: 25px 50px;
  ${space};
`;
