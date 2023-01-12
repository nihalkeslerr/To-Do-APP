import React, {useState,useEffect} from 'react'
import {} from './style.css'
import IndexAdd from './AddSection/indexAdd'

function ToDo() {
  const [goals, setGoal]= useState([{
    note:"Learn JavaScript"
  }

  ]);

  useEffect(()=>{

    console.log("Goals: ",goals);
    
  },[goals])

  return (
    <div>indexGeneral
      <IndexAdd addgoal={setGoal} goals={goals}/>
      

    </div>
  )
}

export default ToDo;