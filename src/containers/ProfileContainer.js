import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { updateUser } from '../actions/session'

const mapStateToProps = state => {
  return { user: state.session.user }
}

const mapDispatchToProps = dispatch => {
  return {
    sendUser: user => {
      dispatch(updateUser(user))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
