import "./widget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

const Widget = ({ type }) => {
  let data;

  // Temporary values for demonstration
  const amount = 250;
  const diff = 15;

  switch (type) {
    case "customers":
      data = {
        title: "CUSTOMERS",
        isMoney: false,
        link: "View all customers",
        icon: (
          <PeopleAltOutlinedIcon
            className="icon"
            style={{
              color: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
            }}
          />
        ),
      };
      break;
    case "sales":
      data = {
        title: "SALES",
        isMoney: true,
        link: "View all sales",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(34, 139, 34, 0.2)",
              color: "forestgreen",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "View all products",
        icon: (
          <LocalMallOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 165, 0, 0.2)",
              color: "orange",
            }}
          />
        ),
      };
      break;
    case "savings":
      data = {
        title: "SAVINGS",
        isMoney: true,
        link: "View details",
        icon: (
          <SavingsOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(75, 0, 130, 0.2)",
              color: "indigo",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
{/*         <div className={`percentage ${diff > 0 ? "positive" : "negative"}`}>
          <ArrowUpwardIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
