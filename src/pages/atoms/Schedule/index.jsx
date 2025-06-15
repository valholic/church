import { useState } from "react";
import { Card, NavList } from "../../../components";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Schedule() {
    const navigate = useNavigate();
    const params = useParams();
    const [worship, setWorship] = useState('Semua');
    const [schedules, setSchedules] = useState([]);
    const [worshipPosts, setWorshipPosts] = useState([]);
    const worshipExplanation = {
        'Semua': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laborum!',
        'Kebaktian Umum': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, unde!',
        'Ibadah Remaja': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam!',
        'Ibadah Pemuda': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iure.',
        'Sekolah Minggu': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur!',
        'Doa Rabu': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ad.',
    }

    useEffect(() => {
        if(worship === 'Semua') {
            axios.get(`https://church-app-blue.vercel.app/v1/sche/getAll`)
            .then(result => {
                setSchedules(result.data.data);
            })
            .catch(err => {
                console.log(err);
            })

            axios.get(`https://church-app-blue.vercel.app/v1/wor/getAll`)
            .then(result => {
                setWorshipPosts(result.data.data);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            axios.get(`https://church-app-blue.vercel.app/v1/sche/get/${worship}`)
            .then(result => {
                setSchedules(result.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    
            axios.get(`https://church-app-blue.vercel.app/v1/wor/get/${worship}`)
            .then(result => {
                setWorshipPosts(result.data.data);
            })
            .catch(err => {
                console.log(err);
            })
        }

    }, [worship])

    return (
        <div className="flex-grow bg-slate-100">
            <div className="bg-[url('/src/assets/image/Worship.jpg')] w-full h-screen bg-cover flex flex-col border-b-2 border-black py-10">
                <p className="w-fit p-4 text-4xl font-bold bg-green-200/70 text-gray-700 rounded-full m-auto">Jadwal Ibadah</p>
                <div className="bg-green-200/70 w-1/2 rounded-4xl h-2/5 p-5 flex flex-wrap m-auto">
                    <p className="w-full text-3xl font-semibold text-gray-700 text-center">Lorem 14:50</p>
                    <p className="w-full text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam consectetur suscipit fuga tenetur, alias repudiandae! Tempora, laudantium mollitia! Natus, reprehenderit incidunt magni animi voluptate nihil dignissimos commodi culpa, hic suscipit exercitationem doloribus quo itaque debitis facere modi! Ab, quibusdam.</p>
                </div>
            </div>
            <div className="w-full h-fit my-4">
                <div className="flex gap-4 justify-center">
                    <NavList handleChange={setWorship} type={'worship'} clicked={worship} />
                </div>
                <p className="w-full text-center font-bold my-4 text-5xl">{worship}</p>
                <p className="w-full py-2 px-20 font-thin text-base text-center">{worshipExplanation[worship]}</p>
                <div className="mx-18 my-8">
                    <p className="font-semibold text-xl mb-4 bg-slate-200 rounded-4xl w-fit px-3 py-1">Jadwal</p>
                    {schedules.length !== 0 &&
                        schedules.map(schedule => {
                            return <a href={`https://church-app-blue.vercel.app/${schedule.schedule}`} key={schedule._id} className="underline hover:text-green-400 block" target="_blank">{schedule.name}</a>
                        })
                    }
                </div>
                <p className="font-semibold text-xl mb-4 mt-8 bg-slate-200 rounded-4xl w-fit px-3 py-1 mx-18">Poster Ibadah</p>
                <div className="flex flex-wrap justify-evenly mt-10 gap-3">
                    {worshipPosts.length !== 0 &&
                        worshipPosts.map(post => {
                            return <Card img={`https://church-app-blue.vercel.app/${post.poster}`} title={post.title} handleClick={() => navigate(`/${params.uid}/${post._id}/det-wor`)} key={post._id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
