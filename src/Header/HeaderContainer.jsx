

import { setUserData } from "../redux/auth-reducer"
import React from "react"
import axios from "axios"
import Header from "./Header"
import { connect } from "react-redux"

class HeaderContainer extends React.Component {
  componentDidMount() {
    
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true} ).then(
      responce => {
        if (responce.data.resultCode === 0){
          this.props.setUserData(responce.data.data.id, responce.data.data.email, responce.data.data.login)
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

