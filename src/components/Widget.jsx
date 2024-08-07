
function Widget({ icon, title, number, arrow, percent, color, textColor }) {

    const iconStyles = `inline-flex flex-shrink-0 items-center justify-center h-12 w-12 text-4xl bg-opacity-60 text-${color}-500 bg-${color}-900 rounded-lg mr-6`;
    const dataStyles = `text-${textColor}-500`;

    return (
        <div className=" sm:w-[20%] w-[30%] p-4 bg-[#202028] rounded-md flex flex-col ">
        <div className={iconStyles}>
          {icon}
        </div>
      
        <div className="text-neutral-300 text-sm mt-2 mb-4">{title}</div>
      
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex justify-between items-center">
            <div className="text-white text-3xl font-bold">{number}</div>
            <div className="flex items-center">
              <span className={dataStyles}>{arrow}</span>
              <span className={dataStyles}>{percent}</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Widget
