import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Next App with Auth0 & Airtable</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer user={user} />

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </>
  )
}

export default Layout
