import { useState, useEffect, useTransition } from 'react'
import TeamMembersGrid from '../components/PostListPage/TeamMembersGrid'
import HeaderPost from '../components/PostListPage/HeaderPost'
import axios from 'axios'

import Form from '../components/Form'
export default function PostList() {
  const startState = {
    name: '',
    id: '',
    author: '',
    content: '',
    role: 'FrontEnd',
    visible: true,
    img: '',
  }

  const [user, setUser] = useState(startState)
  const [usersList, setUserList] = useState([])

  function fetchUsers() {
    axios
      .get('http://localhost:3000/users/')
      .then(res => setUserList(JSON.parse(JSON.stringify(res.data))))
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
    axios.delete(`http://localhost:3000/users/${id}`).then(() => fetchUsers())
  }

  const modifyUser = id => {
    let patchUser = {}
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then(res => {
        const currentUser = res.data
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
      <div className='container mx-auto max-w-6xl px-4 py-12'>
        <HeaderPost></HeaderPost>
        <TeamMembersGrid
          usersList={usersList}
          remove={removeUser}
          modify={modifyUser}
        ></TeamMembersGrid>

        <Form
          user={user}
          formField={handleFormField}
          formSubmit={handleSubmit}
        ></Form>
      </div>
    </>
  )
}
