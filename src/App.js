import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import { Routes, Route } from 'react-router-dom';
import Hello from './components/Muje';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar>
      </NavBar>

      <Footer>
      </Footer>

      //Да се пробвам да ги сложа в футъра
        <Routes>
          <Route path='/products/muje' element={<Hello />}/>
        </Routes>
      <Link to={"/products/muje"}>Мъжки</Link>


      <BackToTopButton />
    </div>

  );
}

export default App;
