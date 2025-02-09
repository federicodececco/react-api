import { useState, useEffect, useTransition } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import UserRow from './components/UserRow'

function App() {
  const startState = {
    name: '',
    id: '',
    author: '',
    content: '',
    role: 'FrontEnd',
    visible: true,
  }

  const [user, setUser] = useState(startState)
  const [usersList, setUserList] = useState([])

  //devo cambaire il fetch, dato che non carico davvero i dati sul server
  function fetchUsers() {
    axios.get('http://localhost:3000/users/').then(res => setUserList(res.data))
    console.log('fetch')
  }

  const handleFormField = (fieldName, value) => {
    setUser(currentUser => {
      return { ...currentUser, [fieldName]: value }
    })
    console.log(user)
  }
  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post('http://localhost:3000/users/', user)
      .then(() => fetchUsers())
      .then(() => setUser(startState))
  }

  const removeUser = id => {
    console.log(id)
    axios.delete(`http://localhost:3000/users/${id}`).then(() => fetchUsers)
  }

  const modifyUser = id => {
    let patchUser = {}
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then(response => {
        const currentUser = response.data
        patchUser = {
          name: user.name !== startState.name ? user.name : currentUser.name,
          author:
            user.author !== startState.author
              ? user.author
              : currentUser.author,
          content:
            user.content !== startState.content
              ? user.content
              : currentUser.content,
          role: user.role !== startState.role ? user.role : currentUser.role,
          visible:
            user.visible !== startState.visible
              ? user.visible
              : currentUser.visible,
        }

        return axios.patch(`http://localhost:3000/users/${id}`, patchUser)
      })
      .then(() => fetchUsers())
      .then(() => setUser(startState))

    axios
      .patch('http://localhost:3000/users/' + id, { patchUser })
      .then(() => fetchUsers())
      .then(() => setUser(startState))
  }

  useEffect(fetchUsers, [])

  return (
    <>
      <div className='mx-auto my-4 w-md'>
        <ul className='my-2 border text-slate-200'>
          {usersList.map(elem => {
            return (
              <UserRow
                key={elem.id}
                user={elem}
                remove={() => removeUser(elem.id)}
                modify={() => modifyUser(elem.id)}
              ></UserRow>
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
          <input
            name='visible'
            type='checkbox'
            checked={true}
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
