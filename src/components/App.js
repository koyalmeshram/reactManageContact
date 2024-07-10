import { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import uuid4 from 'uuid4';

// import TodoList from './TodoList';
import Header from './Header';
import ContactDetails from './ContactDetails';

function App() {
  const localstoragekey = "contact";

  const[showContact, setShowContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localstoragekey))
  || []})

  useEffect(()=>{
    localStorage.setItem(localstoragekey, JSON.stringify(showContact))
},[showContact])
  

  const contact =(data)=>{
    // console.log(data, 'app.js')
    setShowContact([...showContact,{id:uuid4(), data}])
  }

  const removeContact = (id)=>{
      const finalContactList = showContact.filter((val)=>{
        return val.id !== id;
      })
      setShowContact(finalContactList);
  }
  
 
  return (
  
      <div  className='container' style={{ width:700}}>
        <Header/>
        <AddContact contact={contact}/>
        {/* <TodoList/> */}
        <ContactDetails showContact={showContact} removeContact={removeContact}/>
      </div>
  );
}

export default App;
