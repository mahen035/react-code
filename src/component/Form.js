import React, {useState} from 'react';
import DisplayForm from './DisplayForm';


function Form() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[hobbies, setHobbies] = useState([]);
    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        age:'',
        address:'',
        hobbies:[]
    });
    var result= [];
    const firstNameChange = (e) => {
       setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value);
     }
     const ageChange = (e) => {
        setAge(e.target.value);
     }
     const addressChange = (e) => {
        setAddress(e.target.value);
     }
     const hobbiesChange = (e) => {
        
        const values = [...e.target.selectedOptions].map(opt => opt.value);
        console.log(values);
        setHobbies(values);
     }

     //this sending to child of Form
     const setFormInfo =() =>{
        
        setData({
            firstName: firstName,
            lastName: lastName ,
             age: age,
            address: address,
             hobbies: hobbies
        } 
        
         );
    }
    return (
        <div>
            <label>First Name: </label>
            <input onChange={firstNameChange} value = {firstName}/>
            <br></br>
            
            <label>Last Name: </label>
            <input onChange={lastNameChange} value = {lastName}/>
            <br></br>
           
            <label>Age: </label>
            <input onChange={ageChange} value = {age}/>
            <br></br>
                            
            <label>Address: </label>
            <input onChange={addressChange} value = {address}/>
            <br></br>

            <label for="hobbies"> Hobbies (hold Ctrl to select multiple):</label>
            <br></br>
            <select id="myHobbies" multiple onChange={hobbiesChange}>
                <option value = "running">Running</option>
                <option value = "climbing">Climbing</option>
                <option value = "reading">Reading</option>
                <option value = "music">Music</option>
                <option value = "cooking">Cooking</option>
                <option value = "painting">Painting</option>
            </select>
           <br></br>
           <DisplayForm data = {data}/>
            <button onClick={()=>setFormInfo()}> Submit</button>
            <br></br>
            
           
        
        </div>
    );
}



export default Form;