import Button from "../Button";
import Gap from "../Gap";

export default function Alert({ text, handleYes, handleNo }) {
    return (
        <div className="w-screen h-screen fixed z-40 inset-0 bg-white/60 flex justify-center items-center">
            <div className="w-2/5 h-1/3 bg-green-500 border border-black rounded-2xl text-white p-4">
                <p className="text-3xl font-bold w-full text-center">Confirm</p>
                <Gap hw={'h-5'} />
                <p className="text-center">{ text }</p>
                <Gap hw={'h-5'} />
                <div className="w-full h-fit flex gap-4 justify-center">
                    <Button type={'button'} name={'No'} widthBgTxt={'w-1/4 bg-slate-200 text-black hover:bg-slate-300'} handleClick={handleNo} />
                    <Button type={'button'} name={'Yes'} widthBgTxt={'w-1/4 bg-slate-200 text-black hover:bg-slate-300'} handleClick={handleYes} />
                </div>
            </div>
        </div>
    )
}
