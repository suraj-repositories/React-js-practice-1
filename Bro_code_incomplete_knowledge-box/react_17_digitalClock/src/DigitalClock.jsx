
import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
        }
    }, []);

    function formatedTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const medial = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${preZero(hours)}:${preZero(minutes)}:${preZero(seconds)} ${medial}`;

    }

    function preZero(number){
        return (number < 10 ? "0" : "") + number;
    }


    return (
        <div className='digital-clock-container'>
            <div className="clock">
                <span>🕓{formatedTime()}</span>
            </div>
        </div>
    );

}

export default DigitalClock;