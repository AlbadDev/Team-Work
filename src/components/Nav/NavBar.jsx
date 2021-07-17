
import React, { useState } from 'react'
import './nav.css'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {AppBar,Toolbar,Menu,MenuItem, Grid} from '@material-ui/core'
 const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{position:'-webkit-sticky'}}>
      <Navbar className='bg-info text-white p-3'  light expand="md" style={{display:'flex'}}>
        <Grid xs={2}  item>
        <NavbarBrand href="/" style={{color:'white',fontFamily:'Ubuntu, sans-serif'}}>Team Work</NavbarBrand>
        </Grid>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Grid xs={10} item > 
          <Nav className="mr-auto" navbar style={{float:'right'}}>
            <NavItem className='nav mx-3' style={{fontSize:20}}>
              <NavLink href="/Home" className=' nav_link text-white'>Home</NavLink>
            </NavItem>
            <NavItem className='nav mx-3' style={{fontSize:20}}>
              <NavLink href="/Team" className=' nav_link text-white'>Team</NavLink>
            </NavItem>
            <NavItem className='nav mx-3' style={{fontSize:20}}>
              <NavLink href="/About" className=' nav_link text-white'>About</NavLink>
            </NavItem>
          </Nav>
          </Grid>
        </Collapse>
        
      </Navbar>
    </div> 
  );
}

export default NavBar;