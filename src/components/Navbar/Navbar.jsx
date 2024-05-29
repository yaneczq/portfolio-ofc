import "../../assets/styles/components/_navbar.scss"

const Navbar = () => {
return (
    <nav className="navbar">
      <div className="logo">
          L+ 
          {/* <a href="#"><img src="src\assets\images\logo.jpg" alt="" /></a> */}
      </div>
      <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Downloads</a></li>
      </ul>
    </nav>
)
}

export default Navbar