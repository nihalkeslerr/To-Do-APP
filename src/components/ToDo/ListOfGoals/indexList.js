import React, {useState}from 'react'


function List({goals,setGoal}) {
  const [checked, setChecked]=useState({checked:""})

  const deneme=(e)=>{
    console.log("onchange")
  }

  const checkedif=(e)=>{
    if (e.detail==1) {
      setGoal(
        goals.map((item)=>{
          return !item.completed ? {...item, completed: true} :item 
          
      }))
      setChecked({checked:true})}

    if(e.detail==2){
      setGoal(
        goals.map((item)=>{
          return item.completed ? {...item, completed: false} :item 
          
      }))
      setChecked({checked:false})}
  }

  const destroy=(note)=>{
    
  }

  return (
    <section className="main">

            <input className="toggle-all" type="checkbox" 
            checked={checked.checked} onChange={deneme} />

            <label htmlFor="toggle-all" onClick={checkedif}>

            Mark all as complete
        </label>

        <ul className="todo-list">
        { 
            goals.map((goal,i,j,k,a,b)=>(

            <li key={i} className={goal.completed ? "completed" : ""}>
              <div key={j} className="view">

                <input key={k} className="toggle" type="checkbox" checked={goal.completed} onChange={()=>{
                  setGoal(
                    goals.map((item)=>{
                      return item===goal ?
                      {...item, completed: !item.completed} :item 
                      
                    }))}}/>

                <label key={a}>{goal.note} </label>
                <button key={b} className="destroy" onClick={()=>{

                  const newlist=goals.filter((filt)=>filt.note !==goal.note)
                  setGoal(newlist)
                }} ></button>

              </div> 
            </li>
            ))}
        </ul>
    </section>
        

  )
}

export default List