import { FaChevronRight } from "react-icons/fa";

function MenuWidget({ icon, title, color }) {
    
    const iconStyles = `inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-4xl bg-opacity-60 text-${color}-500 bg-${color}-900 rounded-full mr-6`;

  return (
    <div className="flex justify-between m-5">
        <div className="flex items-center">
        <div className={iconStyles}>{icon}</div>
        <div className="text-white">{title}</div>
        </div>
        
        <div className="bg-[#4a4b50] text-neutral-300 rounded-full flex items-center justify-center w-8 h-8"><FaChevronRight /></div>
          
        
    </div>
  )
}

export default MenuWidget