import { connect } from 'react-redux'
import { addNew, deleteNew, updateNew, setNews } from '../actions/news'
import News from '../components/News'

const mapStateToProps = state => {
  return {
    news: state.news.news,
    setFlag: state.news.setNews,
    user: state.session.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNew: myNew => dispatch(addNew(myNew)),
    deleteNew: id => dispatch(deleteNew(id)),
    updateNew: myNew => dispatch(updateNew(myNew)),
    setNews: () => dispatch(setNews()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
