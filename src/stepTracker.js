import React, {useState} from 'react';

function StepTracker(){
    const [steps, setSteps] = useState(0);

console.log(setSteps);

function increment(){
    setSteps(prevState => prevState +1); 
}

return(
    <div> 
        Today you've taken {steps} steps!
        <br></br>
        <button onClick={increment}>
            I Took Another Step, Yay!!
        </button>
    </div>
);

}

export default StepTracker;