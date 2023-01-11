import himmpowder from '../Productinfo/images/himmpowder.png'
import teabag from '../Productinfo/images/teabag.png';

export default function ProductInfo (){
    return <div>
            <img className="teacards" src={teabag}/>
            <img className="teacards" src={himmpowder}/>
            <img className="teacards" src={teabag}/>
            <img className="teacards" src={teabag}/>
           </div>
}