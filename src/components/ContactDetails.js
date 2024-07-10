import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
// import './App.css';
export default function ContactDetails(props) {
  const{showContact, removeContact} = props;
    
    // console.log(showContact)
     const contacts = props.showContact.map((val)=>{
            return(
                <>
                    <div>
                    <p className='design'>{val.data.name} 
                        <p>{val.data.email}</p>
                        <span onClick={()=>props.removeContact(val.id)}><DeleteIcon/></span>
                    </p>
                    </div>
                </>
            )
          })
          return (
            <div>
      <h4 className='Headline'>Contact List</h4>
       <p className='contacts'> {contacts} </p>
       
    </div>
  )
}
