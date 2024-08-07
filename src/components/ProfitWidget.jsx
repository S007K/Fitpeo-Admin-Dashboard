import { FaCaretUp } from "react-icons/fa";
import ProgressBar from './ProgressBar'
function ProfitWidget() {
    return (
      <div className="h-[100%] flex flex-row justify-between rounded-md p-4">
        <div className="flex flex-col justify-between">
            <div className="text-neutral-300 text-sm">Net Profit</div>
            <div className="text-white text-4xl font-bold">$ 6759.25</div>
            <div className="flex items-center text-green-500">
                <FaCaretUp />
                3%
            </div>
        </div>
        <ProgressBar />
      </div>
    )
}

export default ProfitWidget