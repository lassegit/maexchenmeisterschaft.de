import styled, { css } from 'styled-components';
import { Flex } from 'rebass';
import { default as DefaultLink } from '../Link'; // eslint-disable-line import/no-named-default

export const Container = styled(Flex)`
  height: 60px;
  line-height: 60px;
  background: rgba(255, 255, 255, 0.175);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const Link = styled(DefaultLink).attrs(() => ({
  unstyled: true,
}))`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.075em;
  padding: 0 2rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.black};
      && {
        background-color: ${({ theme }) => theme.colors.white};
      }
    `};
`;
