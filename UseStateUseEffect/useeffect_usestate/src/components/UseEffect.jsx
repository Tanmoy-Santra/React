import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        // Cleanup the timer on component unmount
        return () => {
            clearTimeout(timer);
            console.log('Timer cleared');
            
        };
    }, [count]);

    const toggleHandler = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Hi, I am counter {count}</h1>
            <button onClick={toggleHandler}>toggle</button>
        </div>
    );
}

export default UseEffect;
