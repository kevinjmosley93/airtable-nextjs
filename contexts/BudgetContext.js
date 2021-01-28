import React, { createContext, useState } from 'react'
const BudgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState([])
  const [newBudget, setNewBudget] = useState([])

  const getBudget = async () => {
    try {
      const res = await fetch('/api/get-budget')
      const latestBudget = await res.json()
      setBudget(latestBudget)
    } catch (err) {
      console.error(err)
    }
  }

  const addBudget = async budget => {
    try {
      const res = await fetch('/api/get-budget', {
        method: 'POST',
        body: JSON.stringify()
      })
      const latestBudget = await res.json()
      setBudget(latestBudget)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <BudgetContext.Provider
      value={{
        budget,
        newBudget,
        setNewBudget,
        setBudget,
        getBudget,
        addBudget
      }}>
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetProvider, BudgetContext }
