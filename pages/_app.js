import '../styles/globals.css'
import Nav from '../components/Nav'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@natscale/react-calendar/dist/main.css';

  function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  // AOS.init()
  return(
    <>
    <Nav/>
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
