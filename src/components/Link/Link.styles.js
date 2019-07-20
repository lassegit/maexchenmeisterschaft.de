import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { space } from 'styled-system';

export const LinkSt = styled(GatsbyLink)`
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  border-bottom: ${({ unstyled }) => (unstyled ? 'none' : 'dotted 1px')};
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  ${space};

  &:hover {
    border-bottom-color: transparent;
  }
`;
