import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';


function App() {
  return (
    <div>
      <NavBar>
      </NavBar>

      {/* Ще трябва да го променим в процеса най-вероятно. Tова е да държи footer долу */}
      <div className='flex-wrapper min-vh-100 d-flex flex-column justify-content-between'>
        <main className='m-2 p-3'>
          <Routes/>
          

        </main>

        <Footer>
        </Footer>
      </div>

      <BackToTopButton />
      
    </div>

  );
}

export default App;