import instagram from '../Footer/images/insta-logo.png'

export default function Footer (){
    return    <div class="footer">
    <div class="link-container">
      <a href="/imprint" class="link">Imprint</a> 
      <a href="https://www.instagram.com/livgelassen/"><img className='link-instagram' src={instagram} alt="logo-instagram" /></a> 
      <a href="/privacypolicy" class="link">Privacy Policy</a>    
    </div> 
      </div>
}