import livlogo from './images/LIV-branco.png';
import teaImage from './images/shadow.png'
import ProductInfo from './components/Productinfo/ProductInfo';
import './App.css';
import { ViewSwitch } from './components/Countdown/ViewSwitch';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
         <section className="App-container2">
          <div className='liv-logo'>
           <img src={livlogo} className="App-logo" alt="logo" />
          </div>
          <div>
           <h1>bringing you serenity, joy and hydration</h1>
          </div>
         </section>
         <section className="App-container">
          <div>
            <h4>Three different flavors for your instant happiness</h4>
         </div>
        <ProductInfo/>
        </section>
        <section className="App-container3">
         <ViewSwitch/>
         <div className='product-picture'>
          <img className='tea-shadow' src={teaImage} alt="tea-shadow"></img>
         </div> 
        </section>
         <Footer />
    </div>
  );
}

export default App;
