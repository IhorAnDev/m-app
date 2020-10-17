import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi,howe are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
        {id: 3, message: 'Heeeey', likesCount: 25},
        {id: 4, message: 'Fun', likesCount: 2}
    ]
}

it('length of posts should incremented', () => {
    //1. test data
    let action = addPostActionCreator('Antonov is programmer: true');

    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message  of  new posts should  be `correct`', () => {
    //1. test data
    let action = addPostActionCreator('Antonov is programmer: true');


    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[4].message).toBe('Antonov is programmer: true');
});

it('after deleting  length  of  posts should  be decrement', () => {
    //1. test data
    let action = deletePost(1);


    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3)
});
it('after deleting  length  should be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1000);


    // 2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4)
});
