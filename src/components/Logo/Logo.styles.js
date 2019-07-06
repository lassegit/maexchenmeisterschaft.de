import styled from 'styled-components';
import { Link } from 'gatsby';

export const LogoSt = styled(Link)`
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out, opacity 0.5s ease, transform 0.5s ease, visibility 0.5s;
  pointer-events: auto;
  border-style: solid;
  border-color: #ffffff;
  border-width: 5px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize[36]};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  letter-spacing: 0.075em;
  line-height: 1;
  padding: 1rem 1.75rem;
  text-transform: uppercase;
  visibility: visible;

  &:hover {
    border-color: #18bfef;
    color: #18bfef;
  }
`;
