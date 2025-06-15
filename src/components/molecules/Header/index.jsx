import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert } from "../../atoms";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import HeaderNav from "../HeaderNav";
import { Admin, ChurchLogo, Notification, SignOut } from "../../../assets";

export default function Header() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const uid = params.uid;
    const [isSignOut, setIsSignOut] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        axios.get(`https://church-app-blue.vercel.app/v1/auth/finduid/${uid}`)
        .then(result => {
            if(result.data.data.status === 'Admin') {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        });
    }, [uid, location])

    return (
        <div className="w-full bg-green-500 flex items-center gap-2">
            {isSignOut &&
                <Alert text={'Are you sure want to log out from this account?'} handleNo={() => setIsSignOut(false)} handleYes={() => navigate(`/login`)} />
            }
            <img src={ChurchLogo} className="h-20 w-20"/>
            <p className="text-3xl font-bold text-white">Church-App</p>
            <div className="flex gap-x-10 ml-10">
                <HeaderNav />
            </div>
            <div className="flex-1 flex mr-10 justify-end gap-4">
                {isAdmin &&
                <img src={Admin} className="h-7 w-7 cursor-pointer" onClick={() => navigate(`/${uid}/admin`)} />
                }
                <img src={Notification} className="h-8 w-8 cursor-pointer" onClick={() => navigate(`/${uid}/notification`)} />
                <img src={SignOut} className="h-8 w-8 cursor-pointer" onClick={() => setIsSignOut(true)} />
            </div>
        </div>
    )
}
