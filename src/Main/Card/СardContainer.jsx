
import { setUserProfile } from "../../redux/sidebar-reducer"
import React from "react"
import { connect } from "react-redux"
import Card from "./Card"
import axios from "axios"

class CardContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(
      responce => {
        this.props.setUserProfile(responce.data)
      }
    )
  }


  render() {
    return (
      <Card {...this.props} profile = {this.props.profile}/>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    profile: state.sidebarPage.profile
  }
}



export default connect(mapStateToProps, { setUserProfile })(CardContainer)
