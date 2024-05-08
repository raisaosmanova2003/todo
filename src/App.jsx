

import { useState } from 'react'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState("")
  const [task, setTask] = useState([])

  const handleInp = (e) => {
    setInputVal(e.target.value)
  }

  const addtask = (e) => {
    e.preventDefault()
    setTask([...task, { id: Date.now(), title: inputVal }])
    setInputVal("")
  }

  const removetask = (id) => {
    setTask(task.filter((item) => item.id !== id))
  }

  const toggleCheck = (id) => {
    setTask(task.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked }
      }
      return item
    }))
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <section className='contain'>
      <div className="container">
        <div className="contain_head">
          <h1>TODO</h1>
          <div className={isDarkMode ? 'Dark Mode' : 'light Mode'}>
          <button className='toggle' onClick={handleToggleTheme}>
            {isDarkMode?  <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </button>
          </div>
        </div>
        <div className="contain_body">
          <form action="">
            <input type="text" onChange={handleInp} value={inputVal} />
            <button className='add' onClick={addtask}>Add</button>
          </form>
          <ul>
            {task.map((item) => (
              <div className={`item_list ${item.checked ? 'checked' : ''}`} key={item.id}>
                <button className='check' onClick={() => toggleCheck(item.id)}>
                  {item.checked ? <i className="fa-solid fa-check"></i> : null}
                </button>
                <li >{item.title}</li>
                <button onClick={() => removetask(item.id)} className='delete'>X</button>
              </div>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default App

