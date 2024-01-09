import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
    <p>Admin Header</p>
    <Outlet></Outlet>
    <p>Admin Footer</p>
    </div>
  )
}

export default AdminLayout