import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
export var scrollSaverSlice = createSlice({
    name: 'scrollSaver',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
export var scrollSaverActions = scrollSaverSlice.actions;
export var scrollSaverReducer = scrollSaverSlice.reducer;
