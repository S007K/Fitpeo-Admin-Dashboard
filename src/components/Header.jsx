import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'

function Header() {
    return (
        <div className="h-20 flex items-center text-[16px] sticky top-0 z-10 text-[#acacaf] bg-[#202028] w-full">
            <div className="w-full p-[20px] flex items-center h-full justify-between gap-2">
                <div className="flex items-center border border-[#34343f] rounded-[5px] bg-[#2a2b30] w-[250px] p-[3px]">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search" className='font-semibold ml-2 mb-1 border-0 outline-none bg-transparent placeholder:text-[12px]' />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-[20px] relative">
                        <LanguageOutlinedIcon className="text-[20px]" />
                        English
                    </div>
                    <div className="flex items-center mr-[20px] relative">
                        <DarkModeOutlinedIcon className="text-[20px]" onClick={() => dispatch({ type: 'TOGGLE' })} />
                    </div>
                    <div className="flex items-center mr-[20px] relative">
                        <ChatBubbleOutlineOutlinedIcon className="text-[20px]" />
                        <div className="w-[15px] h-[15px] bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">2</div>
                    </div>
                    <div className="flex items-center mr-[20px] relative">
                        <SettingsOutlinedIcon className="text-[20px]" />
                    </div>
                    <div className="flex items-center mr-[20px] relative">
                        <NotificationsNoneOutlinedIcon className="text-[20px]" />
                        <div className="w-[15px] h-[15px] bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">1</div>
                    </div>
                    <div className="flex items-center mr-[20px] relative">
                        <ListOutlinedIcon className="text-[20px]" />
                    </div>
                    <div className="flex items-center sm:mr-[20px] mr-0 relative">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="w-[30px] h-[30px] rounded-full "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
