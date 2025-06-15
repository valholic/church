import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "../../atoms";

export default function HeaderNav() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const uid = params.uid;

    return (
        <>
            <Link text={'Beranda'} decor={`hover:text-white hover:text-lg ${location.pathname === `/${uid}/home` ? 'text-white text-lg' : 'text-slate-200'}`} handleClick={() => navigate(`/${uid}/home`)} />
            <Link text={'Renungan'} decor={`hover:text-white hover:text-lg ${location.pathname === `/${uid}/reflection` ? 'text-white text-lg' : 'text-slate-200'}`} handleClick={() => navigate(`/${uid}/reflection`)} />
            <Link text={'Pelayanan'} decor={`hover:text-white hover:text-lg ${location.pathname === `/${uid}/service` ? 'text-white text-lg' : 'text-slate-200'}`} handleClick={() => navigate(`/${uid}/service`)} />
            <Link text={'Jadwal Ibadah'} decor={`hover:text-white hover:text-lg w-fit ${location.pathname === `/${uid}/schedule` ? 'text-white text-lg' : 'text-slate-200'}`} handleClick={() => navigate(`/${uid}/schedule`)} />
            <Link text={'Diakonia'} decor={`hover:text-white hover:text-lg ${location.pathname === `/${uid}/charity` ? 'text-white text-lg' : 'text-slate-200'}`} handleClick={() => navigate(`/${uid}/charity`)} />
        </>
    )
}
