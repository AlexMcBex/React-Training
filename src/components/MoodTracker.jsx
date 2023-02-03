
import { useState } from 'react'


const MoodTracker = () => {
    
    const [moodPoints, setMoodPoints] = useState(1)

    // helper methods
 const increaseMood = () =>{
    if (moodPoints >9){
        setMoodPoints(1)
    }else{
    setMoodPoints(moodPoints + 1)
    }
 }
   const handleSetToTen = () =>{
    setMoodPoints(10)
   }
// }
    // What should the component render?
    return (
        <div>
                <p>On a scale of 1-10</p>
                <p>You are this happy: {moodPoints}</p>
                <button onClick={increaseMood} >Cheer up!</button>
                <button onClick={handleSetToTen}>Good Mood 🌈</button>

            </div>
        )
        
    }



export default MoodTracker