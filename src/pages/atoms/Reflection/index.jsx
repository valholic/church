import { useState } from "react";
import { Card } from "../../../components";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Reflection() {
    const navigate = useNavigate();
    const params = useParams();
    const [reflections, setReflections] = useState([]);

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/ref/get`)
        .then(result => {
            setReflections(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div className="flex-grow bg-slate-100">
            <div className="bg-[url('/src/assets/image/Bible.png')] w-full h-screen bg-cover rounded-br-full flex flex-col border-b-2 border-black">
                <div className="bg-green-200/70 w-1/2 rounded-full h-2/5 p-5 flex self-start mt-40 mx-5 flex-wrap">
                    <p className="w-full text-3xl font-semibold text-gray-700 text-center">Lorem 14:50</p>
                    <p className="w-full text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam consectetur suscipit fuga tenetur, alias repudiandae! Tempora, laudantium mollitia! Natus, reprehenderit incidunt magni animi voluptate nihil dignissimos commodi culpa, hic suscipit exercitationem doloribus quo itaque debitis facere modi! Ab, quibusdam.</p>
                </div>
                <p className="w-fit p-4 text-4xl font-bold my-10 bg-green-200/70 rounded-full self-end mr-20 mt-30 mb-3">Renungan</p>
            </div>
            <div className="flex flex-col w-full h-fit p-4 mt-10">
                <div className="flex flex-wrap justify-evenly gap-3">
                    {reflections.length !== 0 &&
                        reflections.map(ref => {
                            return <Card img={`https://church-app-blue.vercel.app/${ref.ref_image}`} title={ref.title} handleClick={() => navigate(`/${params.uid}/${ref._id}/det-ref`)} key={ref._id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
