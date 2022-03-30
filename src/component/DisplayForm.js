import React from 'react';


function DisplayForm(props) {
//    const data = "This display is the child of the Form Parent"
    return (
        <div>
            
         <h1>{props.data.firstName}</h1>   
        </div>
    );
}

export default DisplayForm;