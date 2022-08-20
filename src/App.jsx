import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './layouts/Header/Header'
import List from './layouts/List/List'

function App() {
  
  const usersURL = 'http://localhost:3001/api/users'

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [guest, setGuest] = useState({})

  const usersPetitionGet = async() => {
    await axios.get(usersURL) 
      .then(data => {
        setUsers(data.data.data)
        setGuest(data.data.data[0])
      })
        }
  

  useEffect(() => {
     usersPetitionGet()
  }, [])



  console.log(guest)
  console.log(users)

  return (
    <>
    <Header user={user} setUser={setUser} users={users} guest={guest}/>
    <List />
    </>
  )
}

export default App
