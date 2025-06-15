import { useState } from "react"
import { CharityForm, Gap, NavList, NotifForm, ReflectionForm, ScheduleForm, WorshipForm } from "../../../components";

export default function Create() {
    const [type, setType] = useState('Worship');
    const [isUpload, setIsUpload] = useState(false);
    const [isSend, setIsSend] = useState(false);

    return (
        <div className="flex-grow bg-slate-100">
            <div className="flex gap-4">
                <p className="m-auto w-80 h-40 bg-green-300 rounded-4xl border-2 border-gray-400 mt-5 text-center leading-40 text-4xl font-bold text-gray-700 cursor-pointer relative z-10" onClick={isUpload ? () => {setIsUpload(false)} : () => {
                    setIsUpload(true);
                    setIsSend(false);
                    }}>
                    Upload ➕           
                </p>
                <p className="m-auto w-80 h-40 bg-green-300 rounded-4xl border-2 border-gray-400 mt-5 text-center leading-40 text-4xl font-bold text-gray-700 cursor-pointer relative z-10" onClick={isSend ? () => setIsSend(false) : () => {
                    setIsSend(true);
                    setIsUpload(false);
                    }}>
                    Send 🔔           
                </p>
            </div>
            {isSend &&
                <>
                    <Gap hw={'h-10'} />
                    <NotifForm />
                </>
            }
            <>
                {!isSend && 
                    <div className={`${isUpload ? 'flex gap-4 justify-center translate-y-1/12 opacity-100': 'flex gap-4 justify-center -translate-y-full opacity-0'} transition-all duration-700 relative z-0`}>
                        <NavList handleChange={setType} type={'create'} clicked={type} />
                    </div>
                }
                {isUpload && type === 'Worship' &&
                    <WorshipForm />
                }
                {isUpload && type === 'Reflection' &&
                    <ReflectionForm />
                }
                {isUpload && type === 'Charity' &&
                    <CharityForm />
                }
                {isUpload && type === 'Schedule' &&
                    <ScheduleForm />
                }
            </> 
        </div>
    )
}