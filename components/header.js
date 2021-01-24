import { Navbar, Nav } from 'react-bootstrap'

function Header({ user, loading }) {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          {!loading &&
            (user ? (
              <>
                <Nav.Link href='/profile'>Client-rendered profile</Nav.Link>
                <Nav.Link href='/advanced/ssr-profile'>
                  Server rendered profile
                </Nav.Link>
                <Nav.Link href='/api/logout'>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link href='/api/login'>Login</Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href='/'>
    //           <a>Home</a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href='/about'>
    //           <a>About</a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header >
  )
}

export default Header
