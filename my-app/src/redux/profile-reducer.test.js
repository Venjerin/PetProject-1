import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "Everybody...", likesCount: 10 },
  ],
};

it("length of posts should be incremented", () => {
  //1. startTestData
  let action = addPostActionCreator("text text");

  //2. new action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  //1. startTestData
  let action = addPostActionCreator("text text");

  //2. new action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[2].message).toBe("text text");
});

it("after deleting length of messages should be decrement", () => {
    //1. startTestData
    let action = deletePost(1);
  
    //2. new action
    let newState = profileReducer(state, action);
  
    //3. expectation
    expect(newState.posts.length).toBe(1);
  });
  
