import './App.css';
import { useRef, useState } from 'react';
function App() {  
  const [x ,setx]= useState([])
  const inpref =useRef()                        // همسك ال input
  const Add =()=>{
     const value =inpref.current.value         //هاتلي القيمة اللي بكتبها
    //  console.log(value)                    //للتاكيد
    const newData={completed :false ,value}                          //object عشان هشتغل true &false
          // شايلة الvalue وال ckeck اللي هعمله بال completed  {newData}
    setx ([...x ,newData])
    inpref.current.value=""
   }                    //فضيلي الinput  بعد ما كتبت 
    const itemDone = (index) =>{
      const newx = [...x]
      newx[index].completed =  !newx[index].completed
 
      setx(newx)
   }
    // console.log(x)
    const toDelete =(index)=>{
      const newx = [...x]
      newx.splice(index ,1)
      setx(newx)
    }
  
  return (
    <div className="App">
    <h2>To Do List</h2>
    <ul>
      {
        x.map(({value ,completed} , index)=>{
          return  <div className='div10' > 
            <li className={completed? 'diffstyle' : ''} onClick={ () => itemDone(index)}>{value}</li>
            <span onClick={()=> toDelete(index)}>x</span>
            </div>
        })
      }
    </ul>
    <input ref={inpref} placeholder='Enter new task'/>
     <button onClick={Add}>Add</button>
    </div>
  );
}

export default App;
