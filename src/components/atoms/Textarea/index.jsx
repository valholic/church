export default function Textarea({ name, placeholder, label, widthBg, txt, value, handleTarea}) {
    return (
        <label htmlFor={name} className={`w-full ${txt}`}>
            {label}
            <textarea name={name} id={name} placeholder={placeholder} value={value} onChange={handleTarea} className={`block h-20 rounded-sm p-2 ${widthBg}`} required></textarea>
        </label>
    )
}
