import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    user: state.session.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
