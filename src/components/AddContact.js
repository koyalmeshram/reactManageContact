import React, { useState } from 'react'
// import './App.css';
export default function AddContact({contact}) {
    const[addContact, setAddContact] = useState({name:"", email:""})

    const handleChange=(e)=>{
        if(e.target.name==='name'){
            setAddContact({...addContact, name: e.target.value})
        }
        else{
            setAddContact({...addContact, email: e.target.value})
        }
    }
    const handleAdd=()=>{
        if(addContact.name==="" || addContact.email===""){
            alert("Please fill all the details")
        }
        else{
            contact(addContact)
        }
       setAddContact({name:"", email:""}) 
        
    }
  return (
    <div>
        <form>
            <h3 className='Headline'>Add Contact</h3><br/>
            <label>Name:</label><br/>
            <input type='text' placeholder='Enter name' name='name' value={addContact.name} onChange={handleChange}/><br/>
            <label>Email:</label><br/>
            <input type='text' placeholder='Enter email' name='email' value={addContact.email} onChange={handleChange} />
        
        </form>
        <button style={{marginTop: '2px', backgroundColor: 'navy', color:'white'}} onClick={handleAdd}>Add Contact</button>
        
   </div>
  )
}
