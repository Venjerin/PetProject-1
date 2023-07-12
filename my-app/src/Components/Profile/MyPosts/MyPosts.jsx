import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators.ts";
import { Textarea } from "../../common/FormsControls/FormsControls.tsx";

const MyPosts = React.memo ((props) => {
  let postsElements =[...props.posts].reverse().map((post) => (
    <Post message={post.message} likesCount={post.likesCount}></Post>
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      {!props.router.params.userId && (
        <div className={classes.postsBlock}>
          <h3>My post</h3>
          <AddNewPostFormRedux onSubmit={onAddPost}></AddNewPostFormRedux>
          <div className={classes.posts}>{postsElements}</div>
        </div>
      )}
    </div>
  );
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder="Write a new post"
          validate={[requiredField, maxLength10]}
        ></Field>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);



export default MyPosts;
