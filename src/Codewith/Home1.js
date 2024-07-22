import React from 'react';
import { useAuth } from './Authcontext';

function Home1() {
    const { Increment, Decrement, data } = useAuth();
    
    
    return (
        <div>
            
            <h1>Counter: {data}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}

export default Home1;
