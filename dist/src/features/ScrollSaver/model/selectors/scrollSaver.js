import { createSelector } from '@reduxjs/toolkit';
export var getScrollSaver = function (state) { var _a; return (_a = state.scrollSaver) === null || _a === void 0 ? void 0 : _a.scroll; };
export var getScrollByPath = createSelector(getScrollSaver, function (state, path) { return path; }, function (scroll, path) { return scroll[path] || 0; });
