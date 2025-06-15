import { useState } from "react";
import { Card, NavList } from "../../../components";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Service() {
    const navigate = useNavigate();
    const params = useParams();
    const [status, setStatus] = useState('Hamba Tuhan');
    const [data, setData] = useState([]);
    const statusExplanation = {
        'Hamba Tuhan': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quas magni blanditiis, nulla eum beatae accusantium vitae odio. Aut, vitae.',
        'Dept. Umum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laborum quas. Molestias consequatur id sequi adipisci sunt labore at voluptate?',
        'Dept. Perkabungan': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente eum in, facilis iure obcaecati qui porro. Fugiat, amet ratione.',
        'Dept. Keuangan': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quibusdam, eaque atque et accusantium est? Dolorum similique nobis provident magni?',
        'Dept. Diakonia': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere ducimus officia velit fuga cum ex odio architecto distinctio tempore!',
    }

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/auth/findstat/${status}`)
        .then(result => {
            setData(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [status])

    return (
        <div className="flex-grow bg-slate-100">
            <div className="bg-[url('/src/assets/image/Service.jpg')] w-full h-screen bg-cover rounded-bl-full flex flex-col border-b-2 border-black">
                <div className="bg-green-200/70 w-1/2 rounded-full h-2/5 p-5 flex self-end mt-16 mx-5 flex-wrap">
                    <p className="w-full text-3xl font-semibold text-gray-700 text-center">Lorem 14:50</p>
                    <p className="w-full text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam consectetur suscipit fuga tenetur, alias repudiandae! Tempora, laudantium mollitia! Natus, reprehenderit incidunt magni animi voluptate nihil dignissimos commodi culpa, hic suscipit exercitationem doloribus quo itaque debitis facere modi! Ab, quibusdam.</p>
                </div>
                <p className="w-fit p-4 text-4xl font-bold my-10 bg-green-200/70 rounded-full self-start ml-10 mt-60 mb-3">Pelayanan</p>
            </div>
            <div className="flex flex-col w-full h-fit p-4 mt-10">
                <div className="flex gap-4">
                    <NavList handleChange={setStatus} type={'service'} clicked={status} />
                </div>
                <p className="w-full text-center font-bold my-4 text-5xl">{status}</p>
                <p className="w-full py-2 px-20 font-thin text-base text-center">{statusExplanation[status]}</p>
                <div className="flex flex-wrap justify-evenly mt-10 gap-3">
                    {data.map(profile => {
                        return <Card img={`https://church-app-blue.vercel.app/${profile.profile_image}`} title={profile.name} profile={true} key={profile._id} handleClick={() => navigate(`/${params.uid}/${profile._id}/det-ser`)} />
                    })}
                </div>
            </div> 
        </div>
    )
}

