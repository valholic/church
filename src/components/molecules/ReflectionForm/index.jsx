import { useState } from "react";
import { Button, FileInput, Gap, Textarea, TPENInput } from "../../atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ReflectionForm() {
    const navigate = useNavigate();
    const [refImage, setRefImage] = useState('');
    const [writer, setWriter] = useState('');
    const [source, setSource] = useState('');
    const [titleRef, setTitleRef] = useState('');
    const [text, setText] = useState('');

    function OnHandleRefImg(e) {
        setRefImage(e.target.files[0]);
    }

    function OnSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('ref_image', refImage);
        data.append('title', titleRef);
        data.append('text', text);
        data.append('source', source);
        data.append('writer', writer);

        axios.post(`https://church-app-blue.vercel.app/v1/ref/add`, data, {
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
                <TPENInput type={'text'} name={'title'} label={'Masukkan judul renungan'} placeholder={'Judul'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setTitleRef(e.target.value)} value={titleRef} />
                <TPENInput type={'text'} name={'source'} label={'Masukkan nats Alkitab'} placeholder={'Nats Alkitab'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setSource(e.target.value)} value={source} />
                <TPENInput type={'text'} name={'writer'} label={'Masukkan penulis renungan'} placeholder={'Penulis'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setWriter(e.target.value)} value={writer} />
                <Textarea type={'text'} name={'text'} label={'Masukkan isi renungan'} placeholder={'Isi'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTarea={(e) => setText(e.target.value)} value={text} />
                <FileInput name={'refImage'} label={'Masukkan gambar'} widthBg={'w-full'} txt={'text-gray-700'} handleFile={(e) => OnHandleRefImg(e)} />
                <Gap hw={'h-4'} />
                <Button type={'submit'} name={'Upload'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
            </form>
            <Gap hw={'h-10'} />
        </div>
    )
}
