import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../style/article.css'

const ArticleForm = props => {
  const [header, setHeader] = useState(props.header)
  const [body, setBody] = useState(props.body)

  const handleSubmit = e => {
    e.preventDefault()
    props.send(header, body)
    setHeader('')
    setBody('')
  }

  return (
    <Form onSubmit={handleSubmit} className={props.styleClass}>
      <Form.Group>
        <Form.Label>Header</Form.Label>
        <Form.Control
          type={'text'}
          placeholder={'header'}
          value={header}
          data-field-name={'header'}
          onChange={e => {
            setHeader(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body</Form.Label>
        <Form.Control
          as={'textarea'}
          rows={'5'}
          placeholder={'body'}
          value={body}
          data-field-name={'body'}
          onChange={e => {
            setBody(e.target.value)
          }}
        />
      </Form.Group>
      <Button type={'submit'}>{props.submitBut}</Button>
    </Form>
  )
}

export default ArticleForm
