import Gap from "../Gap";

export default function NotifDetail({ message }) {
    return (
        <div className="w-screen h-screen fixed z-40 inset-0 bg-white/60 flex justify-center items-center">
            <div className="w-2/5 h-fit bg-green-500 border border-black rounded-2xl text-white p-4">
                <p className="text-3xl font-bold w-full text-center">Detail</p>
                <Gap hw={'h-5'} />
                <p className="text-center">{ message }</p>
                <Gap hw={'h-5'} />
            </div>
        </div>
    )
}
