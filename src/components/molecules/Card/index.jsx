import { Button } from "../../atoms";

export default function Card({ img, title, profile, handleClick }) {
    return (
        <div className={`${profile ? 'w-60 h-60' : 'w-80 h-40'} rounded-md relative overflow-hidden shadow-2xl`}> 
            <img src={img} className="object-cover w-full h-full" />
            <div className="w-full h-1/2 bg-white/70  absolute z-30 p-2 bottom-0 grid-rows-2">
                <p className={`font-semibold text-xl mb-2 ${profile ? 'line-clamp-2' : 'line-clamp-1'}`}>{ title }</p>
                <Button type={'button'} name={'Detail'} widthBgTxt={'w-1/3 bg-green-500 hover:bg-green-600 text-white'} handleClick={handleClick} />
            </div>
        </div>
    )
}
