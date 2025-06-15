import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Charity, Service, Home, Notification, Reflection, Schedule, DetailWorship, DetailReflection, DetailCharity, DetailServer, AdminPage } from "../atoms";
import { Footer, Header } from "../../components";
import { useEffect } from "react";
import axios from "axios";

export default function MainApp() {
    const params = useParams();
    const navigate = useNavigate();
    const birthday = localStorage.getItem('birthday');
    
    useEffect(() => {
        const month = new Date().getMonth() + 1;
        const date = new Date().getDate();

        axios.get(`https://church-app-blue.vercel.app/v1/auth/finduid/${params.uid}`)
        .then(result => {
            const user = result.data.data;
            if(user.birthday.month == month && user.birthday.date == date && birthday === 'true') {
                return;
            } else if(user.birthday.month == month && user.birthday.date == date && birthday === 'false') {
                const data = new FormData();
                data.append('title', `Happy birthday, ${user.name}`);
                data.append('message', 'We hope you always healthy and blessed by God');
                data.append('type', 'Events');
                data.append('receiver', `${user._id}`);

                axios.post(`https://church-app-blue.vercel.app/v1/notif/add`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(result => {
                    localStorage.setItem('birthday', 'true');
                })
                return;
            } else if(user.birthday.month != month && user.birthday.date != date && birthday === 'true') {
                localStorage.setItem('birthday', 'false');
                return
            } else {
                localStorage.setItem('birthday', 'false');
                return;
            }
        })
        .catch(err => {
            console.log(err);
        })

        if(!params.uid) {
            navigate('/login');
        };
    }, [params, birthday, navigate])

    return (
        <div className="flex flex-col min-h-screen">
                <Header />
                <Routes>
                    <Route path="/charity" Component={Charity}/>
                    <Route path="/service" Component={Service}/>
                    <Route path="/home" Component={Home}/>
                    <Route path="/notification" Component={Notification}/>
                    <Route path="/reflection" Component={Reflection}/>
                    <Route path="/schedule" Component={Schedule}/>
                    <Route path="/:wid?/det-wor" Component={DetailWorship}/>
                    <Route path="/:rid?/det-ref" Component={DetailReflection}/>
                    <Route path="/:cid?/det-char" Component={DetailCharity}/>
                    <Route path="/:sid?/det-ser" Component={DetailServer}/>
                    <Route path="/admin" Component={AdminPage} />
                </Routes>
                <Footer />
        </div>
    )
}
