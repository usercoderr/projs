import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    error: undefined,
    text: '',
};
var addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
});
export var addCommentFormActions = addCommentFormSlice.actions;
export var addCommentFormReducer = addCommentFormSlice.reducer;
