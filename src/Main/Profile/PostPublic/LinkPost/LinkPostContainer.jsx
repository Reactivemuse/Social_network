
import LinkPost from "./LinkPost";
import { addPostActionCreator, changeOnTitleActionCreator, changeOnTextActionCreator } from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postTitle: state.profilePage.postTitle,
    postText: state.profilePage.postText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addpost: () => {
      dispatch(addPostActionCreator())
    },
    changeOnTitle: (newTitle) => {
      dispatch(changeOnTitleActionCreator(newTitle))
    },
    changeOnText: (newText) => {
      dispatch(changeOnTextActionCreator(newText))
    }
  }
}

const LinkPostContainer = connect(mapStateToProps, mapDispatchToProps)(LinkPost)
export default LinkPostContainer