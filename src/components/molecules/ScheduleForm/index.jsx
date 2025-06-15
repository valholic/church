import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FileInput, Gap, SelectInput, TPENInput } from "../../atoms";

export default function ScheduleForm() {
    const navigate = useNavigate();
    const [schedule, setSchedule] = useState('');
    const [name, setName] = useState('');
    const [scheType, setScheType] = useState('');

    function OnHandleSchedule(e) {
        setSchedule(e.target.files[0]);
    }

    function OnSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('schedule', schedule);
        data.append('name', name);
        data.append('type', scheType);

        axios.post(`https://church-app-blue.vercel.app/v1/sche/add`, data, {
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
                <TPENInput type={'text'} name={'name'} label={'Masukkan nama jadwal'} placeholder={'Nama'} widthBg={'w-full bg-gray-300'} txt={'text-gray-700'} handleTPEN={(e) => setName(e.target.value)} value={name} />
                <SelectInput name={'type'} label={'Pilih jenis ibadah'} txt={'text-gray-700'} handleSelect={(e) => setScheType(e.target.value)} value={scheType} values={['Kebaktian Umum', 'Ibadah Remaja', 'Ibadah Pemuda', 'Sekolah Minggu', 'Doa Rabu']} widthBg={'w-2/5 bg-gray-300'} />
                <FileInput name={'schedule'} label={'Masukkan file jadwal ibadah'} widthBg={'w-full'} txt={'text-gray-700'} handleFile={(e) => OnHandleSchedule(e)} />
                <Gap hw={'h-4'} />
                <Button type={'submit'} name={'Upload'} widthBgTxt={'w-full bg-green-500 hover:bg-green-600 text-white'} />
            </form>
            <Gap hw={'h-10'} />
        </div>
    )
}
