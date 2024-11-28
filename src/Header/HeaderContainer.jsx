import { setUserData } from "../redux/auth-reducer"
import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { AuthMe } from "../API/api"
class HeaderContainer extends React.Component {
  componentDidMount() {
    
    AuthMe().then(
      responce => {
        if (responce.resultCode === 0){
          this.props.setUserData(responce.data.id, responce.data.email, responce.data.login)
        }
      }
    )
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

export default connect(mapStateToProps, { setUserData })(HeaderContainer)

