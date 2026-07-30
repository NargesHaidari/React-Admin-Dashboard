import { useEffect } from "react";

export default function DateDisplay(){

    let todayDate = new Date();
    let month = todayDate.toLocaleString("en-US" , {
        month : 'short',
    })
    let date = todayDate.getDate();
    let year = todayDate.getFullYear();

    return(
        <div className="flex items-center gap-1 px-3 border rounded">
            <i className="fa-regular fa-calendar"></i>
            <p>{date}-{month}-{year}</p>
            <i className="text-sm fa-solid fa-chevron-down"></i>
        </div>
    )
}