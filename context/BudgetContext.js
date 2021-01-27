import React, { createContext, useState } from 'react'
export const BudgetContext = createContext()

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState([])

  const getBudget = async () => {
    try {
      const res = await fetch('/api/get-info')
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
        setBudget,
        getBudget,
        updateBudget,
        deleteBudget,
        addBudget
      }}>
      {children}
    </BudgetContext.Provider>
  )
}
