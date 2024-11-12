
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer