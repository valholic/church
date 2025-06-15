export default function Link({ text, handleClick, decor }) {
    return (
        <p className={`text-center cursor-pointer ${decor} transition-all duration-200`} onClick={handleClick}>{text}</p>
    )
}
