import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Nav = () => {
  return (
	<>
	<Navbar shouldHideOnScroll maxWidth="xl" isBlurred={true} className='bg-transparent'>
      <NavbarBrand>
        <img src="logo.png" alt="" />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className='bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-3xl' href="#" variant="flat" >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar></>
  )
}

export default Nav