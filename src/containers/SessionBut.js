import React from 'react'
import { connect } from 'react-redux'
import LinkBtn from '../components/LinkBtn'
import { Button } from 'react-bootstrap'
import { LogOut } from '../actions/session'

const SessionBut = ({ to, label, altLabel, ...rest }) => {
  const Out = () => {
    rest.LogOut(() => {})
  }
  if (!rest.user) {
    return <LinkBtn to={to} label={label} />
  } else {
    return <Button onClick={Out}> {altLabel} </Button>
  }
}

const mapStateToProps = state => {
  return { user: state.session.user }
}

const mapDispatchToProps = dispatch => {
  return { LogOut: () => dispatch(LogOut()) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionBut)
