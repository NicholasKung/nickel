import Chart from "react-google-charts";
import React from 'react';

const ChartPercentLeft = (props) => {

  return(
    <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        className = "percentage-pie-chart"
        width={'350px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Category', 'Amount'],
          ['Spent', props.card.limit - props.left],
          ['Left', props.left]
        ]}
        options={{
          title: 'Percent Left',
          backgroundColor: '#FFE3B8',
          tooltip: {
            textStyle: {
              color:'black',
              fontSize:'13',
              fontName:'Open Sans',
            }
          },
          legend: {
            textStyle: {
              color:'black',
              fontSize:'16',
              fontName:'Open Sans',
            }
          },
          hAxis: {
            title: 'Number of transactions',
            minValue: 0,
            textStyle: {
              color: 'black',
              fontName: 'Open Sans',
              fontSize: '12',
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
              fontSize: '20'
            },
            textStyle: {
              color: 'black',
              fontName: 'Open Sans',
              fontSize: '20',
            },
          },
          titleTextStyle: {
          color: 'black',
          fontName: 'Open Sans',
          fontSize: '20',
          bold: false,
        },
        pieSliceTextStyle: {
          fontName: 'Open Sans',
          fontSize: '15',
          color: 'black'
        },
        slices: [{color: 'EB585A'}, {color: '4FB876'}],
        pieSliceBorderColor: {
          color: 'black'
        }
    }}
        rootProps={{ 'data-testid': '1' }}
        />
    </div>
  )
}

export default ChartPercentLeft
