import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    value: 0,
};
export var counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: function (state) {
            state.value += 1;
        },
        decrement: function (state) {
            state.value -= 1;
        },
    },
});
export var counterActions = counterSlice.actions;
export var counterReducer = counterSlice.reducer;
export default counterSlice.reducer;
