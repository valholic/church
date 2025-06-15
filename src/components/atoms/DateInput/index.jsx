export default function DateInput({ name, label, value, handleDate }) {
    return (
        <label htmlFor={name} className="">
            { label }
            <input type="date" name={name} id={name} value={value} onChange={handleDate} className="bg-white block rounded-sm p-1" required />
        </label>
    )
}
