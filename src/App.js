import logo from './images/logoLIV.png';
import livlogo from './images/LIV-branco.png';
import teaImage from './images/shadow.png'
import ProductInfo from './components/Productinfo/ProductInfo';
import './App.css';
import { ViewSwitch } from './components/Countdown/ViewSwitch'

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
          <ProductInfo/>
        </section>
        <section className="App-container3">
        <ViewSwitch/>
          <div className='product-picture'>
            <img className='tea-shadow' src={teaImage} alt="tea-shadow"></img>
          </div> 
        </section>
       <footer>
       <div class="footer">
      <div class="link-container">
        <a href="/imprint" class="link">Imprint</a> 
        <a href="/privacypolicy" class="link">Privacy Policy</a> 
        <button id="ot-sdk-btn" class="link ot-sdk-show-settings">Settings</button>
      </div> 
      <div class="some">
        <a target="_blank" href="https://www.instagram.com/eracoffee"></a>
      </div> 
      <div class="lang-copy">
        <p class="copy">2023 © 10X Innovation GmbH &amp; Co. KG</p>
        </div>
        </div>
       </footer>
    </div>
  );
}

export default App;
