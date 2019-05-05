import { LogIn } from '../actions/session'
import { connect } from 'react-redux'
import Login from '../components/Login'



const mapDispatchToProps = dispatch => {
  return { LogIn: params => dispatch(LogIn(params)) }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
