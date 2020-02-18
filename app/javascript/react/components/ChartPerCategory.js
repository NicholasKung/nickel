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
        ['City', 'Number of transactions'],
        ['Food', props.chartData.food],
        ['Vehicle', props.chartData.vehicle],
        ['Home', props.chartData.home],
        ['Other', props.chartData.other],
      ]}
      options={{
        title: 'Number of transactions per category',
        backgroundColor: '#9EE0C7',
        colors: ['#F50057'],
        chartArea: { width: '50%' },
        tooltip: {
          textStyle: {
            color:'black',
            fontSize:'13',
            fontName:'Vollkorn',
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
            fontName: 'Vollkorn',
            fontSize: '12',
            italic: false
          },
          titleTextStyle: {
            color: 'black',
            fontName: 'Vollkorn',
            fontSize: '20',
          },
        },
        vAxis: {
          title: 'Category',
          titleTextStyle: {
            color: 'black',
            fontName: 'Vollkorn',
            fontSize: '20',
            italic: false
          },
          textStyle: {
            color: 'black',
            fontName: 'Vollkorn',
            fontSize: '20',
            italic: false
          },
        },
        titleTextStyle: {
        color: 'black',
        fontName: 'Vollkorn',
        fontSize: '20',
        bold: false,
        italic: false,
      },
      animation: {
        duration: 2000,
        startup: true,
        easing:'inAndOut'
      }
    }}
      // For tests
      rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default ChartPerCategory
