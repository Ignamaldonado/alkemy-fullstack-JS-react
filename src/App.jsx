import { useState, useEffect } from 'react'
import Header from './layouts/Header/Header'
import List from './layouts/List/List'

function App() {
  let incomeAmount = 0
  let expenseAmount = 0

  const usersURL = 'http://localhost:3001/api/users'
  const balanceURL = 'http://localhost:3001/api/balances'

  const [users, setUsers] = useState([])
  const [balances, setBalances] = useState([])
  const [userBalance, setUserBalance] = useState([])
  const [user, setUser] = useState({})
  const [guest, setGuest] = useState({})
  const [listenBalance, setListenBalance] = useState(false)

  const usersPetitionGet = async() => {
    fetch(usersURL)
      .then(res => res.json())
        .then(users => {
          setUsers(users.data)
          setGuest(users.data[0])
        })
      }
        
  const balancesPetitionGet = async() => {
    fetch(balanceURL)
      .then(res => res.json())
        .then(balances => {
          setBalances(balances.data)
        })
      }

  useEffect(() => {
     usersPetitionGet()
  }, [])

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
    <Header user={user} setUser={setUser} users={users} guest={guest} balance={balance} setListenBalance={setListenBalance}/>
    <List balances={userBalance} setListenBalance={setListenBalance}/>
    </>
  )
}

export default App
