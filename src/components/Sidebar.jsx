import { AiFillHome } from 'react-icons/ai'
import { BsClipboardCheck } from 'react-icons/bs'
import { SlWallet } from 'react-icons/sl'
import { BsBagCheck } from 'react-icons/bs'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { IoMdLogOut } from "react-icons/io";
import shape from '../assets/shape.png'

function Sidebar() {
    return (
        <div className="bg-[#202028] text-[#acacaf] w-20 hidden sm:block ">
            <img src={shape} alt="Description of image" className="my-4 mx-2  h-10 w-12 object-fill" />
            <div className=" p-5 text-3xl my-6 flex flex-col gap-10">
            <div className="relative flex items-center">
        <div className="absolute -left-4 h-full w-1 bg-[#7596fd]"></div>
        <AiFillHome className='text-[#7596fd]' />
    </div>
                <AssessmentOutlinedIcon />
                <BsClipboardCheck />
                <SlWallet />
                <BsBagCheck />
            </div>
            <IoMdLogOut className='ml-6 mt-96 text-3xl' />
        </div>
    )
}

export default Sidebar
