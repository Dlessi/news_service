import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Button, Form } from 'react-bootstrap'
import '../style/login.css'

const Login = props => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    props.LogIn({ login: login, password: password })
    setRedirect(true)

  }



  if (redirect) {
    return <Redirect to={'/'} />
  }

  return (
    <Form onSubmit={handleSubmit} className={'loginForm'}>
      <Form.Group>
        <Form.Label>Login</Form.Label>
        <Form.Control
          type={'text'}
          placeholder={'Name'}
          value={login}
          data-field-name={'username'}
          onChange={e => {
            setLogin(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Login</Form.Label>
        <Form.Control
          type={'text'}
          placeholder={'password'}
          value={password}
          data-field-name={'password'}
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
      </Form.Group>
      <Button type={'submit'}>LOG IN</Button>
    </Form>
  )
}

export default Login
