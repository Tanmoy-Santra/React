import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div>
            <h1>Hi, I am counter {count}</h1>
        </div>
    );
}

export default UseEffect;
