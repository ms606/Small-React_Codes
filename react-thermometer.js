import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Thermometer = ({min, max, current, fillColor, backgroundColor, height, width}) => {


const marginLeft = null; 

				// min=0;
				// max=30;
				// width=20;
				// height=300;
				// backgroundColor='blue';
				// fillColor='green';
				// current=10;

const style = {
	backgroundColor: backgroundColor,
	height: height,
	width: width,
	borderRadius: '100px 100px 0 0',
	padding: 1,
	marginLeft: marginLeft,
	position: 'relative'
};

const fillStyle = {
	backgroundColor: fillColor,
	borderRadius: 100,
	height: width * 2.5,
	width: width * 2.5,
	padding: 1,
	position: 'relative',
	top: -width,
	right: 15,
	zIndex: 1
}

const bubbleStyle = {
	backgroundColor: backgroundColor,
	borderRadius: 100,
	height: width * 2.5,
	width: width * 2.5,
	padding: 1, 
	position: 'relative',
	top: -width,
	right: 15,
	zIndex: 1
}
			
const bubbleFill = {
	backgroundColor: fillColor,
	borderRadius: bubbleBorderRadius,
	height: bubblePixelsToFill
}			


return (
	 <div>
	  <h1>You are gonna see a Thermometer</h1>
		<div style={style}>
			<div style={fillStyle}></div>
		</div>
	</div>
 );	

};


ReactDOM.render(
    <Thermometer />,
  document.getElementById('root')
);



