import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://www.cfmotodevoto.com.ar/img/motos/cfmoto_nk_300_naked_devoto_0.png" alt="LogoNavbar" width="100" height="50"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Susuki</a></li>
            <li><a className="dropdown-item" href="#">Honda</a></li>
            <li><a className="dropdown-item" href="#">Yamaha</a></li>
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