import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import "./barChart.css"
export default function SimpleCharts({ data, type,title}) {
  // Kiểm tra kiểu dữ liệu để cấu hình xAxis và data cho BarChart
  let xAxisData = [];
  let seriesData = [];

  if (type === 'shops') {
    xAxisData = data.map(item => item.name); 
    seriesData = data.map(item => item.total); 
  } else if (type === 'time') {
    xAxisData = data.map(item => item.time); 
    seriesData = data.map(item => item.total); 
  }

  return (
    <div className="container">
        <p>{title}</p>
 <BarChart 
      xAxis={[
        {
          id: 'barCategories',
          data: xAxisData, 
          scaleType: 'band',
          categoryGapRatio: 0.5,
          barGapRatio: 0.1
        },
      ]}
      series={[
        {
          data: seriesData, 
        },
      ]}
      width={1000} // Giữ chiều rộng biểu đồ là 1000px
      height={500}
      barSize={1} 
    />
    </div>
   
  );
}
