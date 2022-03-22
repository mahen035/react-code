import React from 'react';

function ChildComponent({toParent}) {
    const data = "From child to parent";
    return (
        <div>
           <button onClick={()=>toParent(data)}>Click Child!</button>
        </div>
    );
}

export default ChildComponent;