import { useState, useEffect } from 'react'

function IndexAdd({addgoal,goals,copygoals, setCopygoals,all,active,completed}) {
  const [Note, setNote]= useState({note:"",completed:false})

  const onChangeInput=(e)=>{
    setNote({...Note, [e.target.name]: e.target.value, completed:false});
  }

  useEffect(()=>{
    setNote({note:""})
  },[goals])


const OnSubmit=(e)=>{

    e.preventDefault();

    if (Note.note == "") {
        console.log("empty Goal");
        return false;
    }

    addgoal([...goals,Note])

}
useEffect(() =>{
  if(all =="selected"){
    let All = goals.filter(item => item);
    setCopygoals([...All]);
  }
  
  if(active == "selected"){
    let Active = goals.filter(item =>item.isChecked === false);
    setCopygoals([...Active]);
  }
  
  if(completed == "selected"){
    let Complete = goals.filter(item => item.isChecked === true);
    setCopygoals([...Complete]);
  }
},[goals])

  
  return (

        <header className="header">
            <h1>todos</h1>
            <form onSubmit={OnSubmit}>
                <input value={Note.note} onChange={onChangeInput} name='note' className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    
    

  )
}

export default IndexAdd;