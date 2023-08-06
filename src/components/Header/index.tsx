import { NavBar } from './styles.js';

const Header = () => {
  return (
    <section>
      <NavBar>
        <div className='title-container'>
          <i className='nes-pokeball' />
          <h1>Pokedex</h1>{' '}
        </div>
        <div className='nes-field search-box'>
          <label>Busque por um pokemon!</label>
          <input type='text' className='nes-input' />
        </div>
      </NavBar>
    </section>
  );
};

export default Header;
