import styled from 'styled-components';

export const TextAreaSt = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.color.grayLight};
  line-height: ${({ theme }) => theme.lineHeight.normal};

  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.color.highlight};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;