import { useState } from "react"
import { Button, DateInput, Gap, Link, TPENInput } from "../../../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const status = 'user';

    function OnSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        data.append('birthday', birthday);
        data.append('status', status);
        axios.post(`https://church-app-blue.vercel.app/v1/auth/register`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
            navigate('/login');
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="absolute inset-0 bg-[url('/src/assets/image/Church-Inside.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-white opacity-60" />
            <form onSubmit={OnSubmit} className="max-w-3/4 md:w-2/5 py-10 m-auto absolute h-fit flex rounded-xl px-5 bg-green-200 flex-wrap gap-y-2">
                <legend className="text-2xl text-gray-700 font-bold w-full text-center mb-8">Shalom!<br/>Daftar untuk melanjutkan</legend>
                <TPENInput type={"text"} name={"name"} placeholder={"Nama"} widthBg={'w-full bg-white'} txt={'text-gray-700'} value={name} handleTPEN={(e) => setName(e.target.value)} label={'Masukkan nama anda'} />
                <TPENInput type={"email"} name={"name"} placeholder={"Email"} widthBg={'w-full bg-white'} txt={'text-gray-700'} value={email} handleTPEN={(e) => setEmail(e.target.value)} label={'Masukkan email anda'} />
                <TPENInput type={"password"} name={"password"} placeholder={"Password"} widthBg={'w-full bg-white'} txt={'text-gray-700'} value={password} handleTPEN={(e) => setPassword(e.target.value)} label={'Masukkan password anda'} />
                <DateInput name={'birthday'} label={'Ulang tahun anda'} value={birthday} handleDate={(e) => setBirthday(e.target.value)} />
                <Gap hw={'h-10'} />
                <Button type={'submit'} name={'Daftar'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
                <Link text={'Sudah punya akun? Masuk di sini!'} decor={'underline text-gray-700 w-full'} handleClick={() => navigate('/login')} />
            </form>
        </div>
    )
}
