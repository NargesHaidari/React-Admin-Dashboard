
export default function StatsCard({iconBg , iconColor , icon , title , price}){
    return(
        <div className="inline-flex w-56 bg-white border border-slate-200 rounded px-6 py-4 shadow gap-3">

            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBg}`}>
                <i class={`text-lg fa-solid ${icon} ${iconColor}`}></i>
            </div>

            <div>
                <h3>{title}</h3>
                <p className="text-2xl mt-2 font-semibold">{price}</p>
            </div>
            
        </div>
    )
}