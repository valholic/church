export default function ErrorAlert({ msg }) {
    return (
        <p className="w-full h-10 text-lg border bg-red-300 rounded-xl text-center p-1 font-semibold border-red-400">
            {msg}
        </p>
    )
}
