import React, { useState } from 'react'
import { Redirect } from 'react-router'
import Profile from '../components/Profile'
import { connect } from 'react-redux'
import { setRegisterArgs } from '../actions/session'

const RegisterContainer = props => {
  const [redir, setRedir] = useState(false)

  if (!props.user) {
    props.setRegisterArgs()
  }

  const sendUser = userObj => {
    let user = JSON.stringify(userObj)
    let request = new XMLHttpRequest()
    request.open('POST', 'api/registration', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(user)

    setRedir(true)
  }

  if (redir) return <Redirect to={'/login'} />
  return <Profile user={props.user} sendUser={sendUser} />
}

const mapStateToProps = state => {
  return { user: state.session.registration }
}

const mapDispatchToProps = dispatch => {
  return {
    setRegisterArgs: () => {
      dispatch(setRegisterArgs())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer)
