import { useState } from "react";
import { Message } from "../../../assets";
import { NotifDetail } from "../../atoms";

export default function NotificationCard({ title, message }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="w-4/5 h-fit p-2 flex flex-wrap gap-4 bg-white rounded-xl shadow-2xl hover:bg-gray-100 cursor-pointer" onClick={isClicked ? () => setIsClicked(false) : () => setIsClicked(true)}>
            <div className="w-full flex gap-4">
                <img src={Message} className="h-8 w-8" />
                <h1 className="text-xl font-semibold line-clamp-1">{title}</h1>
            </div>
            {isClicked &&
                <NotifDetail message={message} />
            }
        </div>
    )
}
