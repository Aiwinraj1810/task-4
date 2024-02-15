
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <div className='navBar'>
     
      <div>logo</div>
      <ul>
       <Link to='/'><li>Home</li></Link> 
       <Link to='/about'><li>About</li></Link>  
      </ul>
     
      </div>
    </>
  )
}

export default Navbar
