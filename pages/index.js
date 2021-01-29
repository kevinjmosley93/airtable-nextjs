import { useContext, useEffect } from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import LineChart from '../components/lineChart'
import { BudgetContext } from '../contexts/BudgetContext'
import Card from '../components/card'

export default function Home({ data }) {
  const { user, loading } = useFetchUser()
  const { budget, setBudget, sortedBudget } = useContext(BudgetContext)
  useEffect(() => {
    setBudget(data)
  }, [budget])

  console.log('data is', sortedBudget)
  // console.log('newBudget data is', newBudget)

  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{' '}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <>
          <Card />
          <LineChart />
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  console.log('this is context', context.req.headers.referer)
  const res = await fetch(`http://localhost:3000/api/get-budget`)
  const data = await res.json()

  return {
    props: { data } // will be passed to the page component as props
  }
}
