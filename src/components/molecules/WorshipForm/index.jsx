import { useState } from "react";
import { Button, FileInput, Gap, SelectInput, Textarea, TPENInput } from "../../atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WorshipForm() {
    const navigate = useNavigate();
    const [poster, setPoster] = useState('');
    const [titleWorship, setTitleWorship] = useState('');
    const [worCaption, setWorCaption] = useState('');
    const [typeWorship, setTypeWorship] = useState('');

    function OnHandlePoster(e) {
        setPoster(e.target.files[0]);
    }

    function OnSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('poster', poster);
        data.append('title', titleWorship);
        data.append('caption', worCaption);
        data.append('type', typeWorship);

        axios.post(`https://church-app-blue.vercel.app/v1/wor/add`, data, {
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
                <TPENInput type={'text'} name={'title'} label={'Masukkan tema ibadah'} placeholder={'Tema'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setTitleWorship(e.target.value)} value={titleWorship} />
                <Textarea type={'text'} name={'caption'} label={'Masukkan caption'} placeholder={'Caption'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTarea={(e) => setWorCaption(e.target.value)} value={worCaption} />
                <SelectInput name={'type'} label={'Pilih jenis ibadah'} txt={'text-gray-700'} handleSelect={(e) => setTypeWorship(e.target.value)} value={typeWorship} values={['Kebaktian Umum', 'Ibadah Remaja', 'Ibadah Pemuda', 'Sekolah Minggu', 'Doa Rabu']} widthBg={'w-2/5 bg-gray-300'} />
                <FileInput name={'poster'} label={'Masukkan poster ibadah'} widthBg={'w-full'} txt={'text-gray-700'} handleFile={(e) => OnHandlePoster(e)} />
                <Gap hw={'h-4'} />
                <Button type={'submit'} name={'Upload'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
            </form>
            <Gap hw={'h-10'} />
        </div>
    )
}
