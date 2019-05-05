import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Profile = props => {
  const { user } = props
  let id
  let args = []
  let i = 0
  for (let item in user) {
    if (item === 'id' || item ==='_id') {
      id = user[item]
      continue
    }
    args[i] = useState(user[item])
    args[i].argName = item
    i++
  }

  const handleSubmit = e => {
    e.preventDefault()
    let user = {}
    user.id = id
    args.forEach(item => {
      user[item.argName] = item[0]
    })
    props.sendUser(user)
  }

  return (
    <Form onSubmit={handleSubmit} className={'loginForm'}>
      {args.map(item => {
        return (
          <Form.Group key={item.argName}>
            <Form.Label>{item.argName}</Form.Label>
            <Form.Control
              type={'text'}
              placeholder={item.argName}
              value={item[0]}
              onChange={e => item[1](e.target.value)}
            />
          </Form.Group>
        )
      })}
      <Button type={'submit'}>Confirm</Button>
    </Form>
  )
}

export default Profile
