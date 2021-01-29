import React, { createContext, useState } from 'react'
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const incomeColor = 'rgba(30, 130, 76, 1)'
const expenseColor = 'rgba(217, 30, 24, 1)'

const BudgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState([])

  const bud = budget.map(e => {
    return {
      id: e.id,
      fields: e.fields
    }
  })
  const sortedBudget = bud.sort((a, b) => {
    return (
      monthNames.indexOf(a.fields.month) - monthNames.indexOf(b.fields.month)
    )
  })
  const income = sortedBudget.map(e => {
    return e.fields.netIncome
  })
  const expenses = sortedBudget.map(e => {
    return e.fields.netExpenses
  })
  const months = sortedBudget.map(e => {
    return e.fields.month
  })
  const sortedMonths = months.sort((a, b) => {
    return monthNames.indexOf(a) - monthNames.indexOf(b)
  })

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        sortedBudget,
        income,
        expenses,
        months,
        incomeColor,
        expenseColor,
        sortedMonths
      }}>
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetProvider, BudgetContext }
