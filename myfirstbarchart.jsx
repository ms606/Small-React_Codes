import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App(){

{
  chart: {
  	type: 'bar' //type of the chart
  },  
  title: {
  	'Bar Chart Title' // title of the chart		
  },
  subtitle: {
  	text: 'My First Practice On Chart' // subtitle of chart goes here 
  }, 
  xAxis: {
  	categories: [
  		'Y1',
  		'Y2',
  		'Y3',
  		'Y4',
  		'Y5'
  	],  // categories on the Y Axis
  title: {
  	text: 'Y Axis Title'
  }, //  the title of Y Axis	
  crosshair: true
  },
  yAxis: {
  	min: 0, // minimum value of the X Axis 
  	title: {
  		text: 'X Axis Title' // the title of the X Axis
  	}
  },
  tooltip: {
  	headerFormat: '<span style="font-size:10px"> {point.key}</span><table>',
  	pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + 
  		'<td style="padding:0"> <b> {point.y}</b></td>>/tr>',
  	footedFormat: '</table>',
  	shared: true,
  	useHTML: true	
  }, //tooltip appears when we hover over a point
}	

}

ReactDOM.render(
 <App />,
  document.getElementById('root')
);


