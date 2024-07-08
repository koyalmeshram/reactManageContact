import { useState } from 'react';
import AddContact from './AddContact';
import './App.css';

import TodoList from './TodoList';
function App() {
  
  return (
  
      <div  className='container' style={{ width:700}}>
        
        <TodoList/>
      </div>
  );
}

export default App;
