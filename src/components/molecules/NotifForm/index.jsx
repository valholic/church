import axios from "axios";
import { useState } from "react"
import { Button, Gap, SelectInput, Textarea, TPENInput } from "../../atoms";
import { useNavigate } from "react-router-dom";

export default function NotifForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const receiver = 'All';

    function OnSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('receiver', receiver);
        data.append('type', type);
        data.append('message', message);

        axios.post(`https://church-app-blue.vercel.app/notif/add`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
            navigate(-1);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="w-1/3 h-fit m-auto">
            <form onSubmit={OnSubmit}>
                <TPENInput type={'text'} name={'title'} placeholder={'Judul'} label={'Masukkan judul notifikasi'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setTitle(e.target.value)} value={title} />
                <Textarea name={'message'} placeholder={'Pesan'} label={'Masukkan isi pesan'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTarea={(e) => setMessage(e.target.value)} value={message} />
                <SelectInput name={'type'} label={'Pilih jenis notifikasi'} txt={'text-gray-700'} handleSelect={(e) => setType(e.target.value)} value={type} values={['Events', 'System', 'News']} widthBg={'w-2/5 bg-gray-300'} />
                <Gap hw={'h-4'} />
                <Button type={'submit'} name={'Send'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
            </form>
            <Gap hw={'h-10'} />
        </div>
    )
}
