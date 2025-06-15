import { useState } from "react";
import { Button, ErrorAlert, Gap, Link, TPENInput } from "../../../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    function OnSubmit(e) {
        e.preventDefault();
        axios.get(`https://church-app-blue.vercel.app/v1/auth/login/${email}/${password}`)
        .then(result => {
            navigate(`/${result.data.data._id}/home`);
        })
        .catch(err => {
            setIsError(true);
        })
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="absolute inset-0 bg-[url('/src/assets/image/Church-Inside.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-white opacity-60" />
            <form onSubmit={OnSubmit} className="max-w-3/4 md:w-2/5 py-20 m-auto absolute h-fit flex rounded-xl p-5 bg-green-200 flex-wrap gap-y-2">
                <legend className="text-2xl text-gray-700 font-bold w-full text-center mb-8">Selamat datang kembali!<br/>Masuk ke akun anda</legend>
                {isError && 
                    <ErrorAlert msg={'Akun tidak ditemukan'} />
                }
                <TPENInput type={"email"} name={"name"} placeholder={"Email"} widthBg={'w-full bg-white'} txt={'text-gray-700'} value={email} handleTPEN={(e) => setEmail(e.target.value)} label={'Masukkan email anda'} />
                <TPENInput type={"password"} name={"password"} placeholder={"Password"} widthBg={'w-full bg-white'} txt={'text-gray-700'} value={password} handleTPEN={(e) => setPassword(e.target.value)} label={'Masukkan password anda'} />
                <Gap hw={'h-20'} />
                <Button type={'submit'} name={'Masuk'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
                <Link text={'Jemaat baru? Daftar di sini!'} decor={'underline text-gray-700 w-full'} handleClick={() => navigate('/register')} />
            </form>
        </div>
    )
}
