import React,{useState} from 'react'

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([])

  const Submit = () => {
    setTodoList([...todoList, todo])
    setTodo('');
  }

  return (
    <div>
      <div>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button onClick={() => Submit()}>送信</button>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => {
            return (<li key={index}>{item}</li>);
        })}
          </ul>
      </div>
    
    </div>
  )
}

export default App
