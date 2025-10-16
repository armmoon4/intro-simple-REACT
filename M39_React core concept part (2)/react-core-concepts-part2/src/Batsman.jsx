import { useState } from "react"

export default function Batsman(){
    const [runs , setRuns] = useState(0);

    const handleSingle = ()=> {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleFour = ()=> {
        const updateRuns = runs + 4 ;
        setRuns(updateRuns); 
    }

    const handleSix = ()=> {
        const updateRuns = runs + 6 ;
        setRuns(updateRuns); 
    }
    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}