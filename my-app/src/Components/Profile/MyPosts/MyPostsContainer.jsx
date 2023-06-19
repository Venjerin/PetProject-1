import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer.ts";
import MyPosts from "./MyPosts";
import { compose } from "redux";
import { useLocation, useNavigate, useParams } from "react-router";


// const MyPostsContainer = (props) => {
// let state = props.store.getState();

// let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
// }

// let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
// };

// return (
//     <MyPosts updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}></MyPosts>
// )
// }

let mapStateToProps = (state) => {
    return { 
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
function withRouter(MyPosts) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <MyPosts
                {...props}
                router={{ location, navigate, params }}
            ></MyPosts>
        );
    }

    return ComponentWithRouterProp; 
}

const MyPostsContainer = compose(connect(mapStateToProps, mapDispatchToProps),
withRouter)(MyPosts);

export default MyPostsContainer;

