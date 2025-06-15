export default function NavList({ handleChange, type, clicked }) {
    const services = ['Hamba Tuhan', 'Dept. Umum', 'Dept. Perkabungan', 'Dept. Keuangan', 'Dept. Diakonia'];
    const worships = ['Semua', 'Kebaktian Umum', 'Ibadah Remaja', 'Ibadah Pemuda', 'Sekolah Minggu', 'Doa Rabu'];
    const creates = ['Worship', 'Reflection', 'Charity', 'Schedule'];
    const notifications = ['Semua','Events', 'System', 'News'];

    return (
        <>
            {type === 'service' && 
                services.map((service, i) => {
                    return <p className={`text-center w-fit p-4 text-xl font-bold my-10 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 ${clicked === service ? 'bg-gray-300' : 'bg-gray-200'}`} onClick={() => handleChange(service)} key={i}>{service}</p>
                })
            }
            {type === 'worship' &&
                worships.map((worship, i) => {
                    return <p className={`text-center w-fit p-4 text-xl font-bold my-10 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 ${clicked === worship ? 'bg-gray-300' : 'bg-gray-200'}`}  onClick={() => handleChange(worship)} key={i}>{worship}</p>
                })
            }
            {type === 'create' &&
                creates.map((create, i) => {
                    return <p className={`text-center w-fit p-4 text-xl font-bold my-10 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 ${clicked === create ? 'bg-gray-300' : 'bg-gray-200'}`} onClick={() => handleChange(create)} key={i}>{create}</p>
                })
            }
            {type === 'notification' &&
                notifications.map((notif, i) => {
                    return <p className={`text-center w-4/5 m-auto p-4 text-xl font-bold my-10 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 ${clicked === notif ? 'bg-gray-300' : 'bg-gray-200'}`} onClick={() => handleChange(notif)} key={i}>{notif}</p>
                })
            }
        </>
    )
}
