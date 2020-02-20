import Chart from "react-google-charts";
import React from 'react';

const ChartHistogram = (props) => {

  let initialArray = [['Transaction', 'Amount']]
  const dataArray = props.chartData.forEach((data) => {
    initialArray.push(data)
  })

  return(
    <Chart
  width={'700px'}
  height={'300px'}
  chartType="Histogram"
  loader={<div>Loading Chart</div>}
  data={initialArray}
  options={{
    title: 'Amount spent per transaction',
    backgroundColor: 'white',
    colors: ['#3F50B5'],
    legend: { position: 'none' },
    tooltip: {
      textStyle: {
        color:'black',
        fontSize:'13',
        fontName:'Open Sans',
      }
    },
    hAxis: {
      title: 'Amount',
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
      title: 'Frequency',
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
  },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  )
}

export default ChartHistogram
