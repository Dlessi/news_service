import React from 'react'
import Article from './Article'
import '../style/news.css'
import ArticleForm from './ArticleForm'

const News = props => {
  const send = (header, body) => {
    let id = props.news.length + 1
    props.addNew({ header: header, body: body, id: id, author : props.user.login })
  }

   if (!props.setFlag) {
      props.setNews()
   }

  const { news } = props

  return (
    <div className={'main'}>
      <div>
        {news.map(item => {
          return (
            <Article
              key={item._id}
              id={item._id}
              header={item.header}
              body={item.body}
              author = {item.author}
              deleteNew={props.deleteNew}
              updateNew={props.updateNew}
            />
          )
        })}
      </div>
      { (props.user) ? (
        <ArticleForm
          header={''}
          body={''}
          send={send}
          submitBut={'ADD'}
          styleClass={'articleForm'}
        />) : <div/>
      }
    </div>
  )
}

export default News
