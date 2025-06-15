import { useNavigate, useParams } from "react-router-dom";
import { Button, Link } from "../../../components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function DetailCharity() {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/char/getbyid/${params.cid}`)
        .then(result => {
            setData(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [params])

    return (
        <div className="flex-grow bg-slate-100">
            <div className="w-4/5 h-fit m-auto bg-white shadow-2xl px-20 py-10">
                <Link text={'Kembali'} decor={'underline text-gray-600'} handleClick={() => navigate(-1)} />
                <div className="grid grid-rows-2 my-10">
                    <img src={`https://church-app-blue.vercel.app/${data.char_image}`} className="w-full" />
                    <div className="mt-2">
                        <h1 className="font-bold text-4xl text-gray-700 text-center">{data.title}</h1>
                        <p className="text-justify mt-8">{data.caption}</p>
                    </div>
                </div>
                <Button type={'button'} name={'Donasi sekarang!'} widthBgTxt={'w-1/5 bg-green-500 text-white hover:bg-green-600'} />
            </div>
        </div>
    )
}
