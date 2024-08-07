import Widget from "./Widget";
import widgetData from "../constants/widgetData";
import ProfitWidget from "./ProfitWidget";
import Chart from "./Chart";
import MenuWidget from "./MenuWidget";
import Datalist from "@/constants/Datalist";
import RecentOrders from "./RecentOrders";
import FeedbackData from "../constants/FeedbackData";
import Feedback from "./Feedback";

function Dashboard() {

  return (
    <>
      {/* Dashboard */}
      <div className="text-2xl m-5  text-white font-semibold">Dashboard</div>

      {/* widgets-container */}
      <div className="flex flex-col gap-10">
        {/* 1st row */}
        <div className="flex sm:flex-row flex-col mx-10 gap-10 ">
          <div className=" sm:w-[70%] w-full sm:flex-nowrap flex-wrap flex sm:flex-row  gap-5 ">
            {widgetData.map((data, index) => (
              <Widget
                key={index}
                icon={data.icon}
                title={data.title}
                number={data.number}
                percent={data.percent}
                arrow={data.arrow}
                color={data.color}
                textColor={data.textColor}
              />
            ))}
          </div>
          <div className="bg-[#202028] sm:w-[30%] w-full rounded-md">
            <ProfitWidget />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex sm:flex-row flex-col mx-10 gap-10 ">
          <div className=" sm:w-[70%] w-full flex gap-5 ">
            <Chart />
          </div>
          <div className="bg-[#202028] sm:w-[30%] w-full rounded-md">
            {Datalist.map((data, index) => (
              <MenuWidget
                key={index}
                icon={data.icon}
                title={data.title}
                arrow={data.arrow}
                color={data.color}
                textColor={data.textColor}
              />
            ))}
          </div>
        </div>

        {/* 3rd row */}
        <div className="flex sm:flex-row flex-col mx-10 gap-10 ">
          <div className="bg-[#202028] sm:w-[70%] w-full px-8 py-5 gap-5 rounded-md">
            <div className="text-white bg-[#202028]  text-3xl font-semibold">
              Recent Orders
            </div>
            <RecentOrders />
          </div>
          <div className="bg-[#202028] sm:w-[30%] w-full rounded-md ">
            <div className="text-white m-5 text-3xl font-semibold">
              Customer's Feedback
            </div>
            {FeedbackData.map((data, index) => (
              <Feedback
                key={index}
                avatar={data.avatar}
                name={data.name}
                comment={data.comment}
              />
            ))}
          </div>
        </div>
        <div>footer</div>
      </div>
    </>
  );
}

export default Dashboard;
