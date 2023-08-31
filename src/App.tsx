import './App.css';
import Encabezado from './components/Encabezado.tsx'
import About from './components/About.tsx'
import Features from './components/Features.tsx';
import Subscription from './components/Subscription.tsx';
import Global from './components/Global.tsx';
import Testimonials from './components/Testimonials.tsx';
import ContactUs from './components/ContacUs.tsx';
import Footer from './components/Footer.tsx';


function App() {

  return (
    <div>
        <Encabezado/>
        <About/> 
        <Features/>
        <Subscription/>
        <Global/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default App
