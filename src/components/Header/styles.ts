import { styled } from 'styled-components';

export const NavBar = styled.div`
  background-image: url('/src/assets/background-pokemon.jpeg');
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-position-y: -150px;

  .title-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 160px;
    background-position-y: -260px;

    .title-container {
      flex-direction: row;
      flex: 1;
      gap: 12px;
    }

    .search-box {
      flex: 2;
    }
  }
`;
