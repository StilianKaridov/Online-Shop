import './App.css';
import OverNavBar from './components/NavBar/OverNavBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

function App() {
  return (
    <div>
      <OverNavBar />
      <NavBar />


      <div className='flex-wrapper min-vh-100 d-flex flex-column'>
        <main className='m-0 p-0'>
          <Routes />
        </main>

        <Footer />
      </div>

      <BackToTopButton />
    </div>

  );
}

export default App;