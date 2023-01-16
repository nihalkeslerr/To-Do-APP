import React, {useState,useEffect} from 'react'
import {} from './style.css'
import IndexAdd from './AddSection/indexAdd'
import List from './ListOfGoals/indexList';


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
       

    </section>
    </div>
  )
}

export default ToDo;