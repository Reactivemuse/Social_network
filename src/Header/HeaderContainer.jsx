import { AuthMeThunk } from "../redux/auth-reducer"
import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.AuthMeThunk();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isauthorised: state.auth.isauthorised,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { AuthMeThunk })(HeaderContainer)

