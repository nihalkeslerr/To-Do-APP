import React, {useState} from 'react'

function Footer({goals}) {
    const uncompleted = goals.filter((item) => item.completed===false)

  return (
    <footer className="footer">
                
            <span class="todo-count">
                <strong>{uncompleted.length} </strong>
                items left
            </span>
        

            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li>
            </ul>
    
            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
  )
}

export default Footer