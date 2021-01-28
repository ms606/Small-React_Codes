import React, { useState } from "react";

export default function App(){
    const [buttonText, setWhenPress] = useState("Press my please");

    return (
        <button onClick={() => setWhenPress("Thanks for pressing")}>
            {buttonText}
        </button>
    )
}