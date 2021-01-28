import React, { useState, useContext } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'
import { Pie } from '@reactchartjs/react-chart.js'

const data = () => {
  const { budget, setBudget, newBudget } = useContext(BudgetContext)

  const [info, setInfo] = useState({
    labels: ['Net Income', 'Net Expenses'],
    datasets: [
      {
        label: '# of Votes',
        data: [65285, 40148],
        backgroundColor: ['rgba(30, 130, 76, 1)', 'rgba(217, 30, 24, 1)']
      }
    ]
  })

  return (
    <>
      this is data
      <Pie data={info} />
    </>
  )
}

export default data
