import { useState } from "react";

export default function Formdata({adddata}){
  const [city,setCity]=useState('');

  const handleChange=(evt)=>{
    setCity(evt.target.value);
  }


  const handleSubmit=(evt)=>{
    evt.preventDefault();
    adddata(city);
    console.log("Submitted"+city);
  }


    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter city name</label>
        <input type="text" value={city} placeholder="Enter city" name={city} onChange={handleChange} />
        <button>Submit</button>
    </form>
        );
}
