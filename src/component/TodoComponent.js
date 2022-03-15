import React from "react";

class TodoComponent extends React.Component{
    constructor(){
        super();
        this.state={
            id: 1,
            value: "dummy"
        };
    }
    

    render(){
        return(
            <div>
            <h1>Class component demo</h1>
            <p>Hello {this.props.value}!</p>
            <p>Id is: {this.state.id} and the value is: {this.state.value}</p>
           
            </div>
        )
    }
}

export {TodoComponent};