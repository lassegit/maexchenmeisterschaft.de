import styled from 'styled-components';

export const TextInputSt = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
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
