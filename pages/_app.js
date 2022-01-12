import '../styles/globals.css'
import Nav from '../components/Nav'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@natscale/react-calendar/dist/main.css';
import Footer from '../components/Footer';
import { Provider as ReduxProvider} from 'react-redux';
import { SessionProvider as AuthProvider} from "next-auth/react"
import store from '../components/store/index'

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
    // <AuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Nav/>
          <Component {...pageProps} />
        <Footer/>
      </ReduxProvider>
    // </AuthProvider>
  ) 
}

export default MyApp
