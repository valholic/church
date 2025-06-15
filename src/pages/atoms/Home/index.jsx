import { useState } from "react";
import { Card } from "../../../components";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const params = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/char/get`)
        .then(result => {
            setNews([result.data.data[0], result.data.data[1]]);
        })
        .catch(err => {
            console.log(err);
        })

        axios.get(`https://church-app-blue.vercel.app/v1/ref/get`)
        .then(result => {
            setNews(prevData => [...prevData, result.data.data[0], result.data.data[1]]);
        })
        .catch(err => {
            console.log(err);
        })

        axios.get(`https://church-app-blue.vercel.app/v1/wor/getAll`)
        .then(result => {
            setNews(prevData => [...prevData, result.data.data[0], result.data.data[1]]);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="flex-grow bg-slate-100">
            <div className="bg-[url('/src/assets/image/Church.jpg')] w-full h-screen bg-cover border-b-2 border-black px-10 rounded-b-[40%] flex">
                <div className="bg-green-200/70 w-1/2 rounded-full h-2/5 p-5 flex my-5 flex-wrap">
                    <p className="w-full text-3xl font-semibold text-gray-700 text-center">Tentang kami</p>
                    <p className="w-full text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam consectetur suscipit fuga tenetur, alias repudiandae! Tempora, laudantium mollitia! Natus, reprehenderit incidunt magni animi voluptate nihil dignissimos commodi culpa, hic suscipit exercitationem doloribus quo itaque debitis facere modi! Ab, quibusdam.</p>
                </div>
                <div className="bg-green-200/70 w-1/2 rounded-full h-2/5 p-5 my-24 flex self-end flex-wrap">
                    <p className="w-full text-3xl font-semibold text-gray-700 text-center">Visi dan Misi</p>
                    <p className="w-full text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam consectetur suscipit fuga tenetur, alias repudiandae! Tempora, laudantium mollitia! Natus, reprehenderit incidunt magni animi voluptate nihil dignissimos commodi culpa, hic suscipit exercitationem doloribus quo itaque debitis facere modi! Ab, quibusdam.</p>
                </div>
            </div>
            <div className="flex flex-col w-full h-fit p-4">
                <p className="text-center m-auto w-fit p-4 text-4xl font-bold my-10 text-gray-700 bg-green-200 rounded-full">Warta Gereja</p>
                <div className="flex flex-wrap justify-evenly gap-3">
                    {news.length !== 0 &&
                        news.map(news => {
                            if(news.char_image) {
                                return <Card img={`https://church-app-blue.vercel.app/${news.char_image}`} title={news.title} key={news._id} handleClick={() => navigate(`/${params.uid}/${news._id}/det-char`)} />
                            } else if(news.ref_image) {
                                return <Card img={`https://church-app-blue.vercel.app/${news.ref_image}`} title={news.title} key={news._id} handleClick={() => navigate(`/${params.uid}/${news._id}/det-ref`)} />
                            } else if(news.poster) {
                                return <Card img={`https://church-app-blue.vercel.app/${news.poster}`} title={news.title} key={news._id} handleClick={() => navigate(`/${params.uid}/${news._id}/det-wor`)} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
