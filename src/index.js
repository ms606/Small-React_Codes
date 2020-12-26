import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StepTracker from './stepTracker';
import reportWebVitals from './reportWebVitals';

function LessText({text, maxLength}) {
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength){
    return <span>{text}</span>;
  }

  return(
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick = {() => setHidden(false)}> read more</a>
      ) : (
        <a onClick = {() => setHidden(true)}> read less</a>
      )}
    </span>
  )
}

// ReactDOM.render(
//   <React.StrictMode>
//     <LessText  
//         text = {`Focused, hard work is the real key to success. Keep your eyes on the goal, 
//                  and just keep taking the next step towards completing it.
//               `} 
//               maxLength ={19}
//     />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <StepTracker />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
