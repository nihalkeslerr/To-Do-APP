import React, {useState,useEffect} from 'react'
import {} from './style.css'
import IndexAdd from './AddSection/indexAdd'
import List from './ListOfGoals/indexList';
import Footer from './Footer/indexFoot';
import FooterInfo from './Footer/indexInfo';


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
    <FooterInfo/>
    </div>
    
  )
}

export default ToDo;