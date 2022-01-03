import React from 'react'
import { Routes, Route, Router, Link, Outlet } from 'react-router-dom'

const Welcome = () => {
  return (
    <section>
      <h1> Welcome Page </h1>
      <p>This is the welcome page</p>
      <p>This page has nested routes</p>
      <Link to='see-user' element={
        <p>This is new see user page</p>
      } >
        See User
      </Link>
      <Link to='new-user' >
      New User 
      </Link>
      <Outlet />
      {/* <Routes>
        <Route
          path='new-user'
          element={
            <div>
              <p>This is new user page</p>
              <button>Hello</button>
            </div>
          }
        >
        </Route>
      </Routes> */}
    </section>
  );
};

export default Welcome;