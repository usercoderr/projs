export var getProfileData = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.data; };
export var getProfileError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.error; };
export var getProfileForm = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.form; };
export var getProfileIsLoading = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.isLoading; };
export var getProfileReadonly = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.profile) === null || _a === void 0 ? void 0 : _a.readonly; };
export var getProfileValidateErrors = function (state) { var _a; return (_a = state.profile) === null || _a === void 0 ? void 0 : _a.validateError; };
