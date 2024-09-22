import React from "react";
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line } from 'recharts';

const ComposeChart = () => {
  // Cập nhật dữ liệu để phản ánh các tháng
  const data = [
    { month: "Jan", Clicks: 4000, PageViews: 2400 },
    { month: "Feb", Clicks: 3000, PageViews: 1398 },
    { month: "Mar", Clicks: 2000, PageViews: 9800 },
    { month: "Apr", Clicks: 2780, PageViews: 3908 },
    { month: "May", Clicks: 1890, PageViews: 4800 },
    { month: "Jun", Clicks: 2390, PageViews: 3800 },
    { month: "Jul", Clicks: 3490, PageViews: 4300 },
    { month: "Aug", Clicks: 3100, PageViews: 4200 },
    { month: "Sep", Clicks: 2900, PageViews: 4700 },
    { month: "Oct", Clicks: 3300, PageViews: 4400 },
    { month: "Nov", Clicks: 3600, PageViews: 4600 },
    { month: "Dec", Clicks: 4000, PageViews: 5000 }
  ];

  return (
    <ComposedChart width={1000} height={500} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="PageViews" barSize={20} fill="#413ea0" name="Page Views" />
      <Line type="monotone" dataKey="Clicks" stroke="#ff7300" name="Clicks" />
    </ComposedChart>
  );
};

export default ComposeChart;
