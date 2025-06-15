import { BCA, Facebook, Instagram, QRCode, YouTube } from "../../../assets";

export default function Footer() {
    return (
        <div className="w-full">
            <div className="bg-green-500 flex items-center gap-2 p-4">
                <div className="flex flex-wrap gap-y-2 h-full w-1/3">
                    <p className="w-full text-white font-semibold">Ikuti kami:</p>
                    <div className="flex gap-x-4 items-center opacity-80">
                        <img src={Facebook} className="cursor-pointer w-[30px] h-[30px]" />
                        <img src={Instagram} className="cursor-pointer w-9 h-9" />
                        <img src={YouTube} className="cursor-pointer w-11 h-11" />
                    </div>
                </div>
                <div className="w-1/3 flex flex-wrap gap-y-2 h-full">
                    <p className="w-full text-white font-semibold">Mau mendukung pelayanan kami?</p>
                    <div className="flex gap-x-4 items-center">
                        <img src={QRCode} className="cursor-pointer w-10 h-10" />
                        <img src={BCA} className="cursor-pointer w-16 h-16" />
                        <p className="text-white">No. Rekening:<br/>1234567890</p>
                    </div>
                </div>
                <div className="w-1/3 h-full">
                    <p className="text-white break-words">
                        Lorem 12:34<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem!
                    </p>
                </div>
            </div>
            <div className="w-full h-8 bg-green-600">
                <p className="text-white text-center">© 2025 Gereja XYZ. All rights reserved.</p>
            </div>
        </div>
    )
}
