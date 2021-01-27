import React from 'react'

export default function footer({ user }) {
  console.log('this is footer user', user)
  const currentYear = new Date().getFullYear()
  return (
    <footer className='page-footer text-center text-md-left pt-4'>
      {user ? (
        <div className='footer-copyright py-3 text-center'>
          <div className='container-fluid'>
            Thanks <span style={{ fontWeight: '700' }}>{user.given_name}</span>!
            Keep Tracking Your Finances.
          </div>
        </div>
      ) : (
        <div className='footer-copyright py-3 text-center'>
          <div className='container-fluid'>
            Made in {currentYear} by:{' '}
            <a href='https://kevinjmosley93.github.io' target='_blank'>
              {' '}
              Kevin J Mosley
            </a>
          </div>
        </div>
      )}
    </footer>
  )
}
