import { styled } from 'styled-components';

export const NavBar = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-image: url('/src/assets/background-pokemon.jpeg');
  height: 160px;
  background-position-y: -260px;

  .title-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .search-box {
    flex: 2;
  }
`;
