import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import Children from './components/Children/Children';
import Women from './components/Women/Women';
import Men from './components/Men/Men';
import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div>
      <NavBar>
      </NavBar>
      {/* Ще трябва да го променим в процеса най-вероятно. Tова е да държи footer долу */}
      <div className='flex-wrapper min-vh-100 d-flex flex-column justify-content-between'>
        <main className='m-2 p-3'>
          {/* //Да се пробвам да ги сложа в футъра */}
          <Routes >
            <Route path='/products/muje' element={<Men />} />
            <Route path='/products/jeni' element={<Women />} />
            <Route path='/products/deca' element={<Children />} />
          </Routes>
          <Link to={"/products/muje"}>Мъжки</Link>
        </main>
        <Footer>
        </Footer>
      </div>
      <BackToTopButton />
    </div>

  );
}

export default App;