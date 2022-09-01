import { useState, useEffect } from 'react'
import Header from './layouts/Header/Header'
import List from './layouts/List/List'

function App() {
  let incomeAmount = 0
  let expenseAmount = 0

  const usersURL = 'https://bills-controller-api.herokuapp.com/api/users'
  const balanceURL = 'https://bills-controller-api.herokuapp.com/api/balances'

  const [users, setUsers] = useState([])
  const [balances, setBalances] = useState([])
  const [userBalance, setUserBalance] = useState([])
  const [user, setUser] = useState({})
  const [guest, setGuest] = useState({})
  const [listenBalance, setListenBalance] = useState(false)
  const [loader, setLoader] = useState(false)
  const [newUser, setNewUser] = useState({})

  const usersPetitionGet = async() => {
    fetch(usersURL)
      .then(res => res.json())
        .then(users => {
          setUsers(users.data)
          setGuest(users.data[0])
        })
      }
        
  const balancesPetitionGet = async() => {
    setLoader(true)
    fetch(balanceURL)
      .then(res => res.json())
        .then(balances => {
          setBalances(balances.data)
          setLoader(false)
        })
      }

  useEffect(() => {
     usersPetitionGet()
  }, [])

  useEffect(() => {
    usersPetitionGet()
 }, [newUser])

  useEffect(() => {
    balancesPetitionGet()
    if(listenBalance) {
      setListenBalance(false)
    } 
 }, [listenBalance])

 useEffect(() => {
  
  if(Object.keys(user).length > 0) {
    let newBalance = balances.filter(balance => balance.user_id == user.id)
    setUserBalance(newBalance)
  } else{
    let newBalance = balances.filter(balance => balance.user_id == guest.id) 
    setUserBalance(newBalance)
  }

 }, [balances, user])

  const incomeFilter = userBalance.filter(balance => balance.type_id == 1)
  const expenseFilter = userBalance.filter(balance => balance.type_id == 2)
  
  incomeFilter.map(income => incomeAmount += income.amount)
  expenseFilter.map(expense => expenseAmount =+ expense.amount)
  let balance = incomeAmount - expenseAmount

  return (
    <>
    <Header user={user} setUser={setUser} users={users} guest={guest} balance={balance} setListenBalance={setListenBalance} newUser={newUser} setNewUser={setNewUser}/>
    <List balances={userBalance} setListenBalance={setListenBalance} loader={loader}/>
    </>
  )
}

export default App
