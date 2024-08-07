// widgetData.js
import { FaShoppingBasket } from 'react-icons/fa';
import { BsBagCheckFill } from "react-icons/bs";
import { BsFillBagXFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const widgetData = [
  {
    icon: <FaShoppingBasket />,
    color: "blue",
    title: "Total Orders",
    number: "75",
    percent: "3%",
    arrow: <FaCaretUp />,
    textColor: "green"
  },
  {
    icon: <BsBagCheckFill />,
    color: "green",
    title: "Total Delevered",
    number: "70",
    percent: "3%",
    arrow: <FaCaretDown />,
    textColor: "red"
  },
  {
    icon: <BsFillBagXFill />,
    color: "red",
    title: "Total Canceled",
    number: "05",
    percent: "3%",
    arrow: <FaCaretUp />,
    textColor: "green"
  },
  {
    icon: <FaHandHoldingDollar />,
    color: "pink",
    title: "Total Revenue",
    number: "$12k",
    percent: "3%",
    arrow: <FaCaretDown />,
    textColor: "red"
  },
  {
    icon: <FaUsers />,
    color: "orange",
    title: "Total Users",
    number: "516",
    percent: "3%",
    arrow: <FaCaretUp />,
    textColor: "green"
  }
];

export default widgetData;
