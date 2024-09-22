import "./stats.scss";
import BarChart from "../../../components/barChart/BarChart"
import ComposeChart from "../../../components/barChart/composeChart"
import React, { useState } from 'react';

const Stats = () => {
  const shopData = [
    { id: 1, name: 'Shop A', total: 4000 },
    { id: 2, name: 'Shop B', total: 3000 },
    { id: 3, name: 'Shop C', total: 5000 },
    { id: 4, name: 'Shop D', total: 6000 },
    { id: 5, name: 'Shop E', total: 9000 },
    { id: 6, name: 'Shop F', total: 5000 },
    { id: 7, name: 'Shop G', total: 4500 },
    { id: 8, name: 'Shop H', total: 3200 },
    { id: 9, name: 'Shop I', total: 7100 },
    { id: 10, name: 'Shop J', total: 6400 },
    ];
    const timeDataMonth = [
        { time: 'Jan', total: 2000 },
        { time: 'Feb', total: 3000 },
        { time: 'Mar', total: 2500 },
        { time: 'Apr', total: 2200 },
        { time: 'May', total: 2700 },
        { time: 'Jun', total: 3200 },
        { time: 'Jul', total: 2900 },
        { time: 'Aug', total: 3100 },
        { time: 'Sep', total: 3300 },
        { time: 'Oct', total: 3600 },
        { time: 'Nov', total: 4100 },
        { time: 'Dec', total: 4500 },
      ];
      
      // Dữ liệu tổng hợp theo từng giờ trong ngày, thêm dữ liệu cho cả ngày
      const timeDataDate = [
        { time: '6am', total: 200 },
        { time: '7am', total: 300 },
        { time: '8am', total: 250 },
        { time: '9am', total: 400 },
        { time: '10am', total: 350 },
        { time: '11am', total: 500 },
        { time: '12pm', total: 450 },
        { time: '1pm', total: 480 },
        { time: '2pm', total: 520 },
        { time: '3pm', total: 490 },
        { time: '4pm', total: 550 },
        { time: '5pm', total: 600 },
        { time: '6pm', total: 650 },
        { time: '7pm', total: 700 },
        { time: '8pm', total: 720 },
      ];

  const [viewType, setViewType] = useState('month'); // State để chọn giữa 'month' và 'date'

  // Hàm xử lý thay đổi giá trị của dropdown
  const handleViewTypeChange = (e) => {
    setViewType(e.target.value); // Cập nhật kiểu dữ liệu muốn xem
  };
  return (
    <div>
          <div  className="itemStas">
          <label>Select data type: </label>
          <select  onChange={handleViewTypeChange} value={viewType}>
            <option value="month">Monthly Revenue</option>
            <option value="date">Daily Revenue</option>
          </select>
          </div>

          {viewType === 'month' ? (
          <BarChart 
            data={timeDataMonth} 
            type="time" 
            title="Monthly Revenue" 
          />
          ) : (
            <BarChart 
              data={timeDataDate} 
              type="time" 
              title="Daily Revenue" 
            />
          )}
<div  className="item">
<label>Page Views and Clicks per Month</label></div>
        <div className="StatContainer"><ComposeChart/></div>
        <div  className="item">
<label>Shop Revenue Overview</label></div>
        <BarChart data={shopData} type="shops" title="Shop Revenue Overview" />

      </div>
  );
};

export default Stats;
