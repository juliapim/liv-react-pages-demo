import himmpowder from '../Productinfo/images/himmpowder.png'
import teabagorange from '../Productinfo/images/teapack-mango.png';
import teabaggreen from '../Productinfo/images/teapack-mint.png';
import mango from '../Productinfo/images/mango.png';
import mint from '../Productinfo/images/mintpowder.png';
import bulletpoints from '../Productinfo/images/bulletpoints.png';
import teapack from '../Productinfo/images/teapack-himm.png'

export default function ProductInfo (){
    return  <div className='products'>
          <div className='products-cards'>
              <img className="teacards" src={teabaggreen}/>
              <img className="teacards" src={bulletpoints}/>
              <img className="teacards" src={mint}/>
              <p id='product-info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div> 
             <div className='products-cards'>
               <img className="teacards" src={teapack}/>
               <img className="teacards" src={bulletpoints}/>
               <img className="teacards" src={himmpowder}/>
               <p id='product-info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
             </div>
            <div className='products-cards'>
              <img className="teacards" src={teabagorange}/>
              <img className="teacards" src={bulletpoints}/>
              <img className="teacards" src={mango}/>
              <p id='product-info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
             
            </div>
           
           </div>
}