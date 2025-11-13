import {useEffect} from 'react';
import './styles/style.scss';
import Header from './components/Header';
import Main from './components/Main';
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      disableMutationObserver: true, 
    });
  }, []);

  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Main />
    </>
  )
}

export default App
