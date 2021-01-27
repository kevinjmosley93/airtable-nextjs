import { Fragment } from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import NumberFormat from 'react-number-format'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function Home({ data }) {
  const { user, loading } = useFetchUser()

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

      {user &&
        data.map(d => {
          console.log('this is data', d)
          return (
            <Fragment key={d.id}>
              <Col xl={12}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className='text-center'>
                      {d.fields.name}
                    </Card.Title>
                    <Card.Subtitle>
                      Net income:
                      <NumberFormat
                        value={d.fields.netIncome}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                      />
                    </Card.Subtitle>
                    <Card.Subtitle>
                      Net expenses:{' '}
                      <NumberFormat
                        value={d.fields.netExpenses}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                      />
                    </Card.Subtitle>
                    <Card.Text>
                      This is a statement with the net income & expenses for{' '}
                      {d.fields.name}
                    </Card.Text>
                    <Card.Footer>
                      The End of month total was:{' '}
                      <NumberFormat
                        value={d.fields.endOfMonth}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                      />
                    </Card.Footer>
                    <Button color='primary'>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Fragment>
          )
        })}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  console.log('this is context', context.req.headers.referer)
  const res = await fetch(`http://localhost:3000/api/get-budget`)
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
