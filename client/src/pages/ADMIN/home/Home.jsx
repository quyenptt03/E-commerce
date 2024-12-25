import "./home.scss";
import Widget from "../../../components/widget/Widget";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import Table from "../../../components/table/Table";

const Home = () => {

  return (
    <div >
        <div className="widgets">
          <Widget type="customers" />
          <Widget type="sales" />
          <Widget type="products" />
          <Widget type="savings" />
        </div>
        <div className="charts">
{/*           <Featured /> */}
          <Chart title="Last 12 Months (Revenue)" aspect={2 / 1} />

        </div>
    </div>
  );
};

export default Home;
