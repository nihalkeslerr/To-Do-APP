import React from 'react'


function List({goals,setGoal}) {
  return (
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={()=>{
          setGoal(
            goals.map((item)=>{
              return !item.completed ? {...item, completed: true} :item 
            })
          )
        }}>

            Mark all as complete
        </label>

        <ul className="todo-list">
        { 
            goals.map((goal,i,j,k,a,b)=>(
            <li key={a} className={goal.completed ? "completed" : ""}>
              <div  key={k} className="view">

                <input key={j} className="toggle" type="checkbox" checked={goal.completed} onChange={()=>{
                  setGoal(
                    goals.map((item)=>{
                      return item===goal ?
                      {...item, completed: !item.completed} :item 
                    }))}}
                />
                <label key={i}>{goal.note} </label>
                <button key={b} className="destroy"></button>

                </div> 
            </li>
            ))
            }
        </ul>
    </section>
        

  )
}

export default List