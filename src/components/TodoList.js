import React, { useState } from 'react'

const TodoList=()=> {
    const [act, setAct] = useState("");
    const [list, newList] = useState([]);
    const bg={
        backgroundColor: "teal"
    }
    const addActivity = ()=>{
        newList((list)=>{
            const myList = [...list, act]
            setAct("")
            console.log(myList)
            return myList;
        })
    }
   const removeActivity = (i)=>{
    const gojo = list.filter((ele, id)=>{
        return i!=id ;
    })
    newList(gojo)
   }
  return (
    <div className='container'>
      <form>
        <input type='text' placeholder='Add Activity here' style={{width: 450}} value={act} onChange={(e)=>{setAct(e.target.value)}}/>
        <input type='button' value="Add" onClick={addActivity} style={bg}/><br/><br/>
        <div style={bg}>Here is{"(are)"} your activity{"(s) :)"}</div><br/>
        {list.map((el, i)=>{
           return (
            <><p style={{backgroundColor: "snow", width: 450}} key={i}><i>{el}</i></p>
           <input type='button' value="Remove" onClick={()=>removeActivity(i)} style={bg}/><br/><br/>
            </>
        )})}

           {list.length>=1 && <input type='button' value="Remove All" onClick={()=>newList([])} style={bg}/>
            }
            <br/><br/>

      </form>
    </div>
  )
}

export default TodoList;

