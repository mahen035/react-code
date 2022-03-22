import React, {useState, useEffect} from 'react';

function useCustomHook(init, componentName) {
    const[count, setCount] = useState(init);

        function resetCount(){
            setCount(count+1);
        }

     useEffect(()=>{
         console.log("Buttom of the "+componentName + " is clicked "+count+" times")
     },[count, componentName])   

    return ( 
        resetCount
    );
}

export default useCustomHook;