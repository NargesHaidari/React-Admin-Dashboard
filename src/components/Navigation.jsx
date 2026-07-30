
import user from '../assets/user.png'

export default function Navigation(){
    return(
        <div className="shadow w-full h-14 flex items-center px-3">
            <div className="flex flex-1 items-center gap-2">
                <i className="fa-solid fa-bars"></i>
                <form className="flex flex-1 max-w-md items-center bg-gray-200 px-2 py-1 rounded-lg">
                    <input className="outline-none flex-1 bg-transparent" type="text" />
                    <i className="text-gray-600 fa-solid fa-magnifying-glass"></i>
                </form>
            </div>

            <div className='flex items-center'>
                <div className='flex gap-6 items-center'>
                    <i className="text-lg fa-regular fa-bell"></i>
                    <i className="text-lg fa-regular fa-envelope"></i>
                    <img src={user} alt="user-image" className='h-9 w-9 rounded-full' />
                </div>
                <div className='px-2 rounded flex items-center gap-2'>
                    <div>
                        <p className='text-sm'>Hi, Narges</p>
                        <p className='text-sm'>Admin</p>
                    </div>
                    <i className="text-sm fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}