const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: 'Hey ,im coder'

};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.body
            };
        case ADD_MESSAGE:
            let body = state.newMessageText;
            return  {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
export const addMessageTextCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});
export default dialogReducer;