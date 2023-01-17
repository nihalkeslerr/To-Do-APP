import React, {useState,useEffect} from 'react'
import {} from './style.css'
import IndexAdd from './AddSection/indexAdd'
import List from './ListOfGoals/indexList';
import Footer from './Footer/indexFoot';


function ToDo() {
  const [goals, setGoal]= useState([])
  const [copygoals, setCopygoals]=useState([])
  const [all, setAll]=useState("selected")
  const [active, setActive]=useState()
  const [completed,setCompleted]=useState()


  useEffect(()=>{
    console.log("Goals: ",goals);
  },[goals])


  return (
    <div>
    <section className='todoapp'>
        <IndexAdd addgoal={setGoal} goals={goals} copygoals={copygoals} setCopygoals={setCopygoals} all={all} active={active} completed={completed}/>
        <List setGoal={setGoal} goals={goals} copygoals={copygoals} setCopygoals={setCopygoals}/>
        <Footer setGoal={setGoal} goals={goals} copygoals={copygoals} setCopygoals={setCopygoals} all={all} setAll={setAll} 
        active={active} setActive={setActive} completed={completed} setCompleted={setCompleted}  />
       

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