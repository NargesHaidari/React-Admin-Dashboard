
import { Link } from "react-router-dom"
 
export default function SummerSale(){
    return(
        <div className="bg-lightCamel p-6 rounded-lg text-sm flex flex-col items-center">
            <i className="text-camel text-3xl fa-solid fa-basket-shopping"></i>
            <h3 className="font-semibold text-lg">Summer Sale</h3>
            <p className="font-bold flex flex-col items-center">Get up to 30% OFF <span className="font-normal">on selected items</span></p>
            <Link to="/" className="bg-camel text-white py-1 px-3 rounded mt-2">View Deals</Link>
        </div>
    )
}