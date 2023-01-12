import { useState, useEffect } from 'react'

function IndexAdd({addgoal,goals}) {
  const [Note, setNote]= useState({note:""})

  const onChangeInput=(e)=>{
    setNote({...Note, [e.target.name]: e.target.value});
  }


const OnSubmit=(e)=>{

    e.preventDefault();

    if (Note.note == "") {
        console.log("empty Goal");
        return false;
    }

    addgoal([...goals,Note])

}
  
  return (
    <div>index

      <section className="todoapp">
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={OnSubmit}>
                <input value={Note.note} onChange={onChangeInput} name='note' className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    
      
      </section>
    </div>
  )
}

export default IndexAdd;