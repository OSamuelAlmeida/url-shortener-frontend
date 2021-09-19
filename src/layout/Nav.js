import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <h1 className='brand'>URL Shortener</h1>
      </Link>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-page'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
