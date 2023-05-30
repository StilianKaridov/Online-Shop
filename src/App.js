import { useState, Fragment } from 'react';
import './App.css';
import OverNavBar from './components/NavBar/OverNavBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <div>
        <OverNavBar />
        <NavBar onShowCart={showCartHandler} />
        <div className='flex-wrapper min-vh-100 d-flex flex-column'>
          <main className='m-0 p-0'>
            <Routes />
          </main>

          <Footer />
        </div>

        <BackToTopButton />
      </div>
    </Fragment>
  );
}

export default App;