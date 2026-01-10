import './App.css'
import EcommerceNavbar from './components/EcommerceNavbar'
import ShoeMarquee from './components/ShoeMarquee'
import Footer from './components/Footer'
import HeroCarousel from './components/HeroCarousel'
import ProductShowcase from './components/Products'
import Category from './components/Category'
import ShoeStore from './components/Premium'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
   <EcommerceNavbar/>
   <HeroCarousel/>
   <h1 style={{ color: 'white', textAlign: 'center' }}>Shoe Showcase</h1>
  <ShoeMarquee/>
  <ProductShowcase/>
  <Category/>
  <ShoeStore/>
  <Footer/>
    </>
  )
}

export default App
