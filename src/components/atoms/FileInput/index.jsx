export default function FileInput({ name, label, widthBg, txt, handleFile}) {
    return (
        <label htmlFor={name} className={`w-full ${txt}`}>
            {label}
            <input type="file" name={name} id={name} onChange={handleFile} className={`h-8 ${widthBg} block file:bg-gray-300 file:rounded-sm file:border file:px-1 file:h-8 file:cursor-pointer`} accept="image/jpg, image/jpeg, img/png, application/pdf" required />
        </label>
    )
}
