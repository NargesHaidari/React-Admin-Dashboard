
import DateDisplay from './DateDisplay.jsx';
import StatsCards from './StatsCards.jsx';

export default function Main(){
    return(
        <div className="p-4 flex flex-col gap-4 bg-slate-50">
            <div className='flex justify-between'>
                <div>
                    <h3 className="font-semibold text-2xl">Welcome back, Narges!</h3>
                    <p>Here's what's happening with your store today.</p>
                </div>
                <DateDisplay />
            </div>

            <div>
                <StatsCards />
            </div>
        </div>
    )
}