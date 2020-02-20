import Chart from "react-google-charts";
import React from 'react';

const ChartPerCategory = (props) => {

  return(
    <div style={{ display: 'flex', maxWidth: 900 }}>
    <Chart
      width={'700px'}
      height={'300px'}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['City', 'Number of transactions', { role: 'style'}],
        ['Food', props.chartData.food,'#66B5E0'],
        ['Vehicle', props.chartData.vehicle, '#FFD5AD'],
        ['Home', props.chartData.home, '#B294FF'],
        ['Other', props.chartData.other, '#EB585A'],
      ]}
      options={{
        title: 'Number of transactions per category',
        backgroundColor: 'white',
        chartArea: { width: '50%' },
        tooltip: {
          textStyle: {
            color:'black',
            fontSize:'13',
            fontName:'Open Sans',
          }
        },
        legend: {
          position: 'none'
        },
        hAxis: {
          title: 'Number of transactions',
          minValue: 0,
          textStyle: {
            color: 'black',
            fontName: 'Open Sans',
            fontSize: '12',
            italic: false
          },
          titleTextStyle: {
            color: 'black',
            fontName: 'Open Sans',
            fontSize: '20',
          },
        },
        vAxis: {
          title: 'Category',
          titleTextStyle: {
            color: 'black',
            fontName: 'Open Sans',
            fontSize: '20',
            italic: false
          },
          textStyle: {
            color: 'black',
            fontName: 'Open Sans',
            fontSize: '20',
            italic: false
          },
        },
        titleTextStyle: {
        color: 'black',
        fontName: 'Open Sans',
        fontSize: '20',
        bold: false,
        italic: false,
      },
      animation: {
        duration: 2000,
        startup: true,
        easing:'out'
      }
    }}
      />
    </div>
  )
}

export default ChartPerCategory
