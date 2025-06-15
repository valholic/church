import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { NavList, NotificationCard } from "../../../components";

export default function Notification() {
    const params = useParams();
    const [notifs, setNotifs] = useState([]);
    const [type, setType] = useState('Semua');

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/notif/find/${params.uid}`)
        .then(result => {
            setNotifs(result.data.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, [params])
    return (
        <div className="flex-grow bg-slate-100 flex">
            <div className="bg-white flex-1/3 p-10">
                <NavList handleChange={setType} type={'notification'} clicked={type} />
            </div>
            <div className="bg-slate-200 flex-2/3 p-10 flex flex-wrap justify-center">
                {notifs.length !== 0 &&
                    notifs.map(notif => {
                        if(type === 'Semua') {
                            return <NotificationCard title={notif.title} message={notif.message} key={notif._id} /> 
                        } else if(notif.type !== type) {
                            return;
                        } else {
                            return <NotificationCard title={notif.title} message={notif.message} key={notif._id} /> 
                        }
                    })
                }
            </div>
        </div>
    )
}
