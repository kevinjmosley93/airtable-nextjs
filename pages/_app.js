import { BudgetProvider } from '../contexts/BudgetContext.js'

function MyApp({ Component, pageProps }) {
  return (
    <BudgetProvider>
      <Component {...pageProps} />
    </BudgetProvider>
  )
}

export default MyApp
