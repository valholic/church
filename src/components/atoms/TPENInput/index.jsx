export default function TPENInput({ type, name, placeholder, label, widthBg, txt, value, handleTPEN}) {
    return (
        <label htmlFor={name} className={`w-full ${txt}`}>
            { label }
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleTPEN} className={`h-8 rounded-sm p-2 ${widthBg}`} required />
        </label>
    )
}
