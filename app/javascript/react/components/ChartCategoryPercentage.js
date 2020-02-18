import Chart from "react-google-charts";
import React from 'react';

const ChartCategoryPercentage = (props) => {

  return(
    <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        className = "percentage-pie-chart"
        width={'390px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Category', 'Amount'],
          ['Food', props.chartData.food],
          ['Vehicle', props.chartData.vehicle],
          ['Home', props.chartData.home],
          ['Other', props.chartData.other],
        ]}
        options={{
          title: 'Expense Categories',
          backgroundColor : '#9EE0C7',

          tooltip: {
            textStyle: {
              color:'black',
              fontSize:'13',
              fontName:'Vollkorn',
            }
          },
          legend: {
            textStyle: {
              color:'black',
              fontSize:'16',
              fontName:'Vollkorn',
            }
          },
          hAxis: {
            title: 'Number of transactions',
            minValue: 0,
            textStyle: {
              color: 'black',
              fontName: 'Vollkorn',
              fontSize: '12',
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
              fontSize: '20'
            },
            textStyle: {
              color: 'black',
              fontName: 'Vollkorn',
              fontSize: '20',
            },
          },
          titleTextStyle: {
          color: 'black',
          fontName: 'Vollkorn',
          fontSize: '20',
          bold: false,
        },
        pieSliceTextStyle: {
          fontName: 'Vollkorn',
          fontSize: '15',
          color: 'black'
        },
        slices: [{color: '#66B5E0'}, {color: '#FFD5AD'}, {color: '#B294FF'}, {color: '#FAB189'}],
        pieSliceBorderColor: {
          color: 'black'
        }
    }}
        rootProps={{ 'data-testid': '1' }}
        />
    </div>
  )
}

export default ChartCategoryPercentage
