import React from 'react'

function Footer({goals, setGoal, copygoals, setCopygoals, all, setAll, active, setActive, completed, setCompleted,}) {
    const uncompleted = goals.filter((item) => item.completed===false)

const showAll=(e)=>{
    setAll("selected")
    setActive("")
    setCompleted("")

    let All=goals.filter(filt=>filt)
    setCopygoals([...All])

    console.log("All copygoals",copygoals)
}





  return (
    <footer className="footer">
                
            <span className="todo-count">
                <strong>{uncompleted.length} </strong>
                items left
            </span>
        


                    <ul className="filters">
                        <li>
                            <a href="#/" className={all} onClick={showAll} >All</a>
                        </li>
                        <li>
                            <a href="#/" className="">Active</a>
                        </li>
                        <li> 
                            <a href="#/" onClick={()=>{
                                goals.filter((filt)=>filt.completed !==false)
                                
                            }}>Completed</a>
                        </li>
                    </ul>



            
    
            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
  )
}

export default Footer