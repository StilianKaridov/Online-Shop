import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Мисля че трябва да го преместим в UI папка но по-късно
function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          className="btn btn-secondary back-to-top"
          onClick={handleBackToTop}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          ^
        </button>
      )}
    </>
  );
}

export default BackToTopButton;