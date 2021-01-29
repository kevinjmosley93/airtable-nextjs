import React, { useContext } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'
import { Bar } from '@reactchartjs/react-chart.js'

const data = () => {
  const { income, expenses, months, incomeColor, expenseColor } = useContext(
    BudgetContext
  )

  const chartInfo = {
    labels: months,
    datasets: [
      {
        type: 'bar',
        label: 'Income',
        data: income,
        backgroundColor: incomeColor
      },
      {
        type: 'bar',
        label: 'Expenses',
        data: expenses,
        backgroundColor: expenseColor
      }
    ],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  return (
    <>
      <h3 style={{ marginTop: '6rem' }} className='text-center'>
        Monthly Income & Expenses for 2020
      </h3>
      <Bar options={chartInfo.options} data={chartInfo} />
    </>
  )
}

export default data
