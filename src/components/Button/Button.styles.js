import styled, { css } from 'styled-components';
import { space } from 'styled-system';

export const ButtonSt = styled.button`
  padding: 0 30px;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 3rem;
  border: 4px solid;
  text-transform: uppercase;
  text-align: center;
  ${space};

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) => theme.colors.highlight};
      }
    `};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => theme.colors.highlight};
        border-color: ${({ theme }) => theme.colors.highlight};
      }
    `};

  &:disabled {
    opacity: 0.25;
    pointer-events: none;
  }
`;

export const UnstyledButtonSt = styled.button`
  all: unset;
`;
