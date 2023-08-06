import { styled } from 'styled-components';

export const HelloWorld = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
