
import logo from '../assets/logo.png'
import SummerSale from './SummerSale'

let liStyle = 'hover:bg-lightCamel hover:text-camel text-gray-600 transition-all duration-200 cursor-pointer mr-auto py-2 px-4 rounded-lg'

export default function Menu(){
    return(
        <div className="inline-flex flex-col py-3 px-4 gap-7 h-[100vh] shadow-lg">
            <img className='w-35' src={logo} alt="Logo-image" />

            <ul className='flex flex-col gap-4'>
                <li className={liStyle}><i className="fa-solid fa-gauge"></i> Dashboard</li>
                <li className={liStyle}><i className="fa-solid fa-cart-shopping"></i> Order</li>
                <li className={liStyle}><i className="fa-solid fa-layer-group"></i> Categories</li>
                <li className={liStyle}><i className="fa-solid fa-box"></i> Products</li>
                <li className={liStyle}><i className="fa-solid fa-percent"></i> Deal</li>
                <li className={liStyle}><i className="fa-solid fa-gear"></i> Settings</li>
            </ul>

            <SummerSale/>
        </div>
    )
}