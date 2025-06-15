import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FileInput, Gap, Textarea, TPENInput } from "../../atoms";

export default function CharityForm() {
    const navigate = useNavigate();
    const [charImage, setCharImage] = useState('');
    const [titleChar, setTitleChar] = useState('');
    const [charCaption, setCharCaption] = useState('');

    function OnHandleCharImg(e) {
        setCharImage(e.target.files[0]);
    }

    function OnSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('char_image', charImage);
        data.append('title', titleChar);
        data.append('caption', charCaption);

        axios.post(`https://church-app-blue.vercel.app/v1/char/add`, data, {
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
                <TPENInput type={'text'} name={'title'} label={'Masukkan judul'} placeholder={'Judul'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setTitleChar(e.target.value)} value={titleChar} />
                <Textarea type={'text'} name={'caption'} label={'Masukkan caption'} placeholder={'Isi'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTarea={(e) => setCharCaption(e.target.value)} value={charCaption} />
                <FileInput name={'charImage'} label={'Masukkan gambar'} widthBg={'w-full'} txt={'text-gray-700'} handleFile={(e) => OnHandleCharImg(e)} />
                <Gap hw={'h-4'} />
                <Button type={'submit'} name={'Upload'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
            </form>
            <Gap hw={'h-10'} />
        </div>
    )
}
