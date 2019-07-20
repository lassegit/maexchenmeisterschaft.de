import styled from 'styled-components';
import { space } from 'styled-system';

export const TextAreaSt = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  ${space};

  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.colors.highlight};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
