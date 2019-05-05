import React from 'react'
import { Button } from 'react-bootstrap'
import '../style/article.css'

const ShowArticle = props => {
  return (
    <div>
      <article>
        <h2>{props.header}</h2>
        <div>{props.body}<p>by {props.author}</p></div>
      </article>
      <div className={'helpBtnGroup'}>
        <Button
          onClick={props.edit}
          variant={'outline-warning'}
          className={'helpButton'}
        >
          Edit
        </Button>
        <Button
          onClick={props.delete}
          variant={'outline-danger'}
          className={'helpButton'}
        >
          DELETE
        </Button>
      </div>
    </div>
  )
}

export default ShowArticle
