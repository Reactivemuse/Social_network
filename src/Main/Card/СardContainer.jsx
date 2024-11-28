
import { setUserProfile } from "../../redux/sidebar-reducer"
import React from "react"
import { connect } from "react-redux"
import Card from "./Card"

import { useParams } from "react-router-dom";
import { getProfile } from "../../API/api"

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class CardContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 31897    
    }
    getProfile(userId).then(
      responce => {
        this.props.setUserProfile(responce)
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

const WhitsUrlContainerComponent = withRouter(CardContainer)
export default connect(mapStateToProps, { setUserProfile })(withRouter(WhitsUrlContainerComponent))
