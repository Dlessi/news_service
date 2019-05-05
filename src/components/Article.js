import React, { useState } from 'react'
import ShowArticle from './ShowArticle'
import ArticleForm from '../components/ArticleForm'

const Article = props => {
  const [header, setHeader] = useState(props.header)
  const [body, setBody] = useState(props.body)
  const [editFlag, setEdit] = useState(false)

  const deleteNew = () => {
    props.deleteNew(props.id)
  }

  const edit = () => {
    setEdit(true)
  }

  const send = (header, body) => {
    let id = props.id
    props.updateNew({ header: header, body: body, _id: id })
    setEdit(false)
    setBody(body)
    setHeader(header)
  }

  if (!editFlag) {
    return (
      <ShowArticle
        header={header}
        body={body}
        author={props.author}
        edit={edit}
        delete={deleteNew}
      />
    )
  } else {
    return (
      <ArticleForm
        header={header}
        body={body}
        send={send}
        submitBut={'Confirm'}
        styleClass={'editForm'}
      />
    )
  }
}

export default Article
