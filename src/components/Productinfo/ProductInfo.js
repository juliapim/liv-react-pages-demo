import himmpowder from '../Productinfo/images/himmpowder.png'
import teabagorange from '../Productinfo/images/teapack-mango.png';
import teabaggreen from '../Productinfo/images/teapack-mint.png';
import mango from '../Productinfo/images/mango.png';
import mint from '../Productinfo/images/mintpowder.png';
import bulletpoints from '../Productinfo/images/bulletpoints.png';
import teapack from '../Productinfo/images/teapack-himm.png'

export default function ProductInfo (){
    return  <div className='products'>
     
          <div className='products-card'>
              <img className="teacards" src={teabaggreen}/>
              <img className="teacards" src={bulletpoints}/>
              <img className="teacards" src={mint}/>
       
            </div> 
             <div className='products-card'>
               <img className="teacards" src={teapack}/>
               <img className="teacards" src={bulletpoints}/>
               <img className="teacards" src={himmpowder}/>
             </div>
            <div className='products-card'>
              <img className="teacards" src={teabagorange}/>
              <img className="teacards" src={bulletpoints}/>
              <img className="teacards" src={mango}/>
             
            </div>
          
           </div>
}