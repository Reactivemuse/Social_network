import { getProfileThunk } from "../../redux/sidebar-reducer"
import React from "react"
import { connect } from "react-redux"
import Card from "./Card"
import { useParams } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileThunk(this.props.match.params.userId)
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
export default connect(mapStateToProps, { getProfileThunk })(withRouter(WhitsUrlContainerComponent))
