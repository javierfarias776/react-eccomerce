import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand"><img src="https://www.cfmotodevoto.com.ar/img/motos/cfmoto_nk_300_naked_devoto_0.png" alt="LogoNavbar" width="100" height="50"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
        </li>
        <li className="nav-item">
        <Link to="/items" className="nav-link active" aria-current="page">Productos</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item"><Link to ={`/marca/${"Honda"}`}>Honda</Link></li>
            <li className="dropdown-item"><Link to ={`/marca/${"Rouser"}`} >Rouser</Link></li>
            <li className="dropdown-item"><Link to ={`/marca/${"Susuki"}`} >Susuki</Link></li>
            <li className="dropdown-item"><Link to ={`/marca/${"Yamaha"}`} >Yamaha</Link></li>

          </ul>
        </li>
          
      </ul>
      <CartWidget/>{/*icon cart shopping */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar