import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "../../../components";

export default function DetailReflection() {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/ref/getbyid/${params.rid}`)
        .then(result => {
            setData(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [params])

    if(data._id) {
        return (
            <div className="flex-grow bg-slate-100 relative">
                <img src={`https://church-app-blue.vercel.app/${data.ref_image}`} className="w-full h-60 opacity-70" />
                <div className="w-4/5 h-fit m-auto bg-white shadow-2xl p-20 -mt-20 relative">
                    <Link text={'Kembali'} decor={'underline text-gray-600'} handleClick={() => navigate(-1)} />
                    <h1 className="text-4xl font-bold text-center my-4">{data.title}</h1>
                    <p className="text-sm font-semibold text-center mb-10">{data.source}</p>
                    <p className="text-justify">
                        {data.text}
                    </p>
                    <p className="text-sm mt-5">Penulis: {data.writer}</p>
                    <p className="text-sm mt-5">Tanggal: {data.createdAt.slice(0, 10)}</p>
                </div>
            </div>
        )
    }
}
