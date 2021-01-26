import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

export default function Home({ data }) {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Next.js and Auth0 Example</h1>

      {data.map(d => {
        console.log('this is data', d)
        return <h1 key={d.id}></h1>
      })}

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
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt='user picture' />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // console.log('this is context', context)
  const res = await fetch(`${context.req.headers.referer}api/airtable`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data } // will be passed to the page component as props
  }
}
