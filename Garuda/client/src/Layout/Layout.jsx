import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <p>Header</p>

        <Outlet>
            
        </Outlet>
        <p>Footer</p>
    </div>
  )
}

export default Layout
