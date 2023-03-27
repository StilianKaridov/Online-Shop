import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

function App() {
  const button = "natisni";

  return (
    <div>
      <NavBar text={button}>

      </NavBar>

      <Footer>
      </Footer>
      
      <BackToTopButton>

      </BackToTopButton>
    </div>

  );
}

export default App;
