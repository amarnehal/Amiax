
import Navbar from '../Components/Navbar';
import Header from '../Components/Header'
import HowToWork from '../API/HowToWork';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer'


function Home() {
  return (
     <>
     <Navbar/>
     <Header/>
     <HowToWork/>
     <AboutUs/>
     <Services/>
     <ContactUs/>
     <Footer/>
     </>
  );
}

export default Home;
