import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [user, setUser] = useState({
    name: '',
    id: '',
    author: '',
    content: '',
    role: '',
  })
  const [usersList, setUserList] = useState([''])
  function fetchUsers() {
    axios.get('http://localhost:3000/users/').then(res => setUserList(res.data))
  }

  const handleFormField = (fieldName, value) => {
    setUser(currentUser => {
      return { ...currentUser, [fieldName]: value }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    console.log(user)

    axios.post('http://localhost:3000/users/', user).then(fetchUsers)
    console.log(usersList)
  }
  const removeUser = id => {
    console.log(id)
    axios.delete(`http://localhost:3000/users/${id}`).then(fetchUsers)
  }
  useEffect(fetchUsers, [])

  return (
    <>
      <div className='mx-auto my-4 w-md'>
        <ul className='my-2 border text-slate-200'>
          {usersList.map(elem => {
            return (
              <li key={elem.id} className='columns-4 px-2 py-1'>
                <div className='text-black'> {elem.name}</div>
                <div className='text-black'>{elem.author}</div>
                <div className='text-red-600'>
                  <button
                    className='px-2 hover:bg-slate-200'
                    onClick={() => removeUser(elem.id)}
                  >
                    <i className='fa-solid fa-trash-can'></i>
                  </button>
                </div>
                <div className='text-black'>{elem.role}</div>
              </li>
            )
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            className='my-4 border px-1 text-emerald-800'
            name='name'
            type='text'
            value={user.name}
            onChange={event => {
              handleFormField('name', event.target.value)
            }}
          />
          <input
            className='my-4 border px-1 text-emerald-800'
            name='author'
            type='text'
            value={user.author}
            onChange={event => {
              handleFormField('author', event.target.value)
            }}
          />
          <input
            className='my-4 border px-1 text-emerald-800'
            name='content'
            type='text'
            value={user.content}
            onChange={event => {
              handleFormField('content', event.target.value)
            }}
          />

          <select
            name='role'
            onChange={event => {
              handleFormField('role', event.target.value)
            }}
          >
            <option value='FrontEnd'>FrontEnd</option>
            <option value='BackEnd'>BackEnd</option>
            <option value='UI/UX'>UI/UX</option>
          </select>
          <button
            type='submit'
            className='mx-1 border-1 px-4 text-slate-900 hover:border-2'
          >
            Aggiungi
          </button>
        </form>
      </div>
    </>
  )
}

export default App
