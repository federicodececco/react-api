import { useState, useEffect } from 'react'
import axios from 'axios'
import UserRow from './components/UserRow'

function App() {
  const [user, setUser] = useState({
    name: '',
    id: '',
    author: '',
    content: '',
    role: 'FrontEnd',
    visible: true,
  })
  const [usersList, setUserList] = useState([''])
  function fetchUsers() {
    axios.get('http://localhost:3000/users/').then(res => setUserList(res.data))
    console.log(user)
  }

  const handleFormField = (fieldName, value) => {
    setUser(currentUser => {
      return { ...currentUser, [fieldName]: value }
    })
    console.log(user)
  }
  const handleSubmit = e => {
    e.preventDefault()

    console.log(user)

    axios.post('http://localhost:3000/users/', user).then(fetchUsers)
    console.log(usersList)
    setUser(currentUser => {
      return {
        name: '',
        id: '',
        author: '',
        content: '',
        role: 'FrontEnd',
        visible: 'true',
      }
    })
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
            return <UserRow key={elem.id} user={elem}></UserRow>
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
          <input
            name='visible'
            type='checkbox'
            checked={user.visible}
            onChange={event => {
              handleFormField('visible', event.target.checked)
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
