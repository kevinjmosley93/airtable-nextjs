import React, { createContext, useState } from 'react'
const BudgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState([])
  const [newBud, setNewBud] = useState([])

  const newBudget = budget.map(res => {
    return {
      id: res.id,
      fields: {
        endOfMonth: res.fields.endOfMonth,
        netIncome: res.fields.netIncome,
        netExpenses: res.fields.netExpenses,
        name: res.fields.name
      }
    }
  })

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
        newBud,
        newBudget,
        setNewBud,
        setBudget,
        getBudget,
        addBudget
      }}>
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetProvider, BudgetContext }
