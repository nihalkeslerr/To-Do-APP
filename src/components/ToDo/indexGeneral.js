import React, {useState,useEffect} from 'react'
import {} from './style.css'
import IndexAdd from './AddSection/indexAdd'
import List from './ListOfGoals/indexList';
import Footer from './Footer/indexFoot';

function ToDo() {
  const [goals, setGoal]= useState([]);

  useEffect(()=>{

    console.log("Goals: ",goals);
    
    
  },[goals])

  return (
    <div>
    <section className='todoapp'>
        <IndexAdd addgoal={setGoal} goals={goals}/>
        <List  setGoal={setGoal} goals={goals}/>
        <Footer/>
       

    </section>
    <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
    </div>
  )
}

export default ToDo;