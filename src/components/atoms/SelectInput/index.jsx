export default function SelectInput({name, values, txt, label, value, widthBg, handleSelect}) {
    return (
        <label htmlFor={name} className={`w-full ${txt}`}>
            {label}
            <select name={name} id={name} onChange={handleSelect} value={value} className={`block h-8 rounded-sm p-1 ${widthBg}`} required>
                <option value="">Pilih</option>
                {values.map((value, i) => {
                    return <option value={value} key={i}>{value}</option>
                })
                }
            </select>
        </label>
    )
}
