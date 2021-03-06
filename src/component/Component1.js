import React, {useState, createContext, useContext} from 'react';
import Component2 from './Component2';

export const UserContext = createContext();
function Component1(props) {
    const [user, setUser] = useState("David Miller");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
      
    );
}

export default Component1;