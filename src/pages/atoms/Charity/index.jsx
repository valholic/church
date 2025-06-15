import { useState } from "react";
import { Card } from "../../../components";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Charity() {
    const navigate = useNavigate();
    const params = useParams();
    const [charities, setCharities] = useState([]);

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/char/get`)
        .then(result => {
            setCharities(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="flex-grow bg-slate-100">
            <div className="bg-[url('/src/assets/image/Charity.jpg')] w-full h-screen bg-cover flex flex-col border-b-2 border-black rounded-b-full items-center py-8">
                <div className="bg-green-200/70 w-1/2 rounded-4xl h-2/5 p-5 flex flex-wrap">
                    <p className="w-full text-3xl font-semibold text-gray-700 text-center">Lorem 14:50</p>
                    <p className="w-full text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam consectetur suscipit fuga tenetur, alias repudiandae! Tempora, laudantium mollitia! Natus, reprehenderit incidunt magni animi voluptate nihil dignissimos commodi culpa, hic suscipit exercitationem doloribus quo itaque debitis facere modi! Ab, quibusdam.</p>
                </div>
            </div>
            <div className="flex flex-col w-full h-fit p-4">
                <p className="text-center m-auto w-fit p-4 text-4xl font-bold my-10 text-gray-700 bg-green-200 rounded-full">Diakonia</p>
                <div className="flex flex-wrap justify-evenly gap-3">
                    {charities.length !== 0 &&
                        charities.map(char => {
                            return <Card img={`https://church-app-blue.vercel.app/${char.char_image}`} title={char.title} profile={true} handleClick={() => navigate(`/${params.uid}/${char._id}/det-char`)} key={char._id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
