import himmpowder from '../Productinfo/images/himmpowder.png'
import teabag from '../Productinfo/images/teabag.png';
import teabagorange from '../Productinfo/images/teabag-orange.png';
import teabaggreen from '../Productinfo/images/teabag-green.png';
import mango from '../Productinfo/images/mango.png'
import mint from '../Productinfo/images/mintpowder.png'

export default function ProductInfo (){
    return <div className='products'>
            <div className='products-cards'>
            <img className="teacards" src={teabag}/>
            <img className="teacards" src={himmpowder}/>
            </div>
            <div className='products-cards'>
            <img className="teacards" src={teabagorange}/>
            <img className="teacards" src={mango}/>
            </div>
            <div className='products-cards'>
            <img className="teacards" src={teabaggreen}/>
            <img className="teacards" src={mint}/>
            </div>
           </div>
}