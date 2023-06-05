import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Navbar />
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout