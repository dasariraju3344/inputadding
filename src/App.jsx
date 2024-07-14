import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';



function App() {

  const [val, setVal] = useState([]);


  const handleAdd = () => {
    const inputArr = [...val, []]
    setVal(inputArr)
  };

  const handleOnChange = (event,i) => {
    const inputdata = [...val]
    inputdata[i] = event.target.value
    setVal(inputdata)
  };

  const handleDelete = (i) => {
    const newdata = [...val]
    newdata.splice(i,1)
    setVal(newdata)
  }

  return (
    <center>
      <h1>Dynamically adding & removing the Input field</h1>
      <button type='button' className='btn btn-primary' onClick={handleAdd}>ADD</button>
      {val.map((itemArr,i) => {
        return (
          <div key={i}>
            <input value={itemArr} className='inputbox' key={i} onChange={event => handleOnChange(event,i)}></input>
            <button className='deletebutton' onClick={()=>handleDelete(i)}>X</button>
          </div>
        )
      })}
    </center>
  )
}

export default App;
