import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "../../../components";

export default function DetailServer() {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/auth/finduid/${params.sid}`)
        .then(result => {
            setData(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [params])

    return (
        <div className="flex-grow bg-slate-100">
            <div className="w-4/5 h-fit m-auto bg-white shadow-2xl p-10">
                <Link text={'Kembali'} decor={'underline text-gray-600'} handleClick={() => navigate(-1)} />
                <div className="grid grid-cols-2 gap-10 my-10">
                    <img src={`https://church-app-blue.vercel.app/${data.profile_image}`} className="m-auto" />
                    <div>
                        <h1 className="text-4xl font-bold text-center">{data.name}</h1>
                        <p className="font-semibold text-lg text-center mb-10">{data.status}</p>
                        <p className="font-thin mb-5">No. Hp: {data.phone}</p>
                        <p className="font-thin mb-5">Email: {data.email}</p>
                        <p className="font-thin mb-5">Address: {data.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
