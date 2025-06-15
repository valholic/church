export default function Button({ type, name, widthBgTxt, handleClick }) {
    return (
        <button type={type} className={`${widthBgTxt} h-8 rounded-sm hover:border hover:border-black cursor-pointer`} onClick={handleClick}>{ name }</button>
    )
}
