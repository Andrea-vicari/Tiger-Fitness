import React from 'react'
import MenuTrainer from '../Common/MenuTrainer'
import MenuUtente from '../Common/MenuUtente'
import LogMenu from '../Common/LogMenu';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import logo from "../../assets/images/tiger-fitness-logo.svg"
import { UseAuthContext } from "../../hooks/UseAuthContext";


function NavbarFixedTop() {

  // Dark theme logics
  const themeType = useSelector((state) => state.counter.value) 

  let navType, bgType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? navType = "navbar-light" : navType = "navbar-dark"

  // 
  const {user} = UseAuthContext()

  const role = useSelector((state) => state.setRole.value)


  console.log("role FROM THE NAVBAR")
  console.log(role)



  return (
    <>
      <div>
      <div className='container-fluid'>
        <nav className={"navbar navbar-expand-lg" + " " + navType + " " + bgType} aria-label="Offcanvas navbar large">
          <div className="container">
          <Link className="navbar-brand d-flex" to={'/'}>
                  <img src={logo} style={{width:200}}/>
                  </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                
              {role == "admin" &&
              <MenuTrainer />
              }
              {role == "user" &&
              <MenuUtente />
              }
              
              <LogMenu />

              </div>
            </div>
          </div>
        </nav>
        </div>
      </div>

    </>
  )
}

export default NavbarFixedTop
