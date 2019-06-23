import styled, { css } from 'styled-components';

export const ButtonSt = styled.button`
  padding: 0 30px;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 3rem;
  border: 4px solid;
  text-transform: uppercase;
  text-align: center;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.primary};

      &:hover {
        background: ${({ theme }) => theme.highlight};
      }
    `};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.white};
      border-color: ${({ theme }) => theme.primary};

      &:hover {
        color: ${({ theme }) => theme.highlight};
        border-color: ${({ theme }) => theme.highlight};
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
