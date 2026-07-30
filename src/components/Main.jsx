
import DateDisplay from './DateDisplay.jsx';

export default function Main(){
    return(
        <div className="p-4">
            <div className='flex justify-between'>
                <div>
                    <h3 className="font-semibold text-2xl">Welcome back, Narges!</h3>
                    <p>Here's what's happening with your store today.</p>
                </div>
                <DateDisplay />
            </div>
        </div>
    )
}