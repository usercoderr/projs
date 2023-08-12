var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ECurrency } from '@/entities/Currency/model/types/currency';
import { ECountry } from '@/entities/Country/model/types/country';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';
import { $api } from '@/shared/api/api';
var axios = require('axios');
var profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 465,
    currency: ECurrency.USD,
    country: ECountry.KAZAKHSTAN,
    city: 'Moscow',
    username: 'admin213',
};
var options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
jest.mock('axios');
describe('features/EditableProfileCard', function () {
    test('Режим рид онли должен переключиться', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentRender(_jsx(EditableProfileCard, { id: "1" }), options);
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))];
                case 1:
                    _a.sent();
                    expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    test('При отмене значения должны обнуляться', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentRender(_jsx(EditableProfileCard, { id: "1" }), options);
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, userEvent.clear(screen.getByTestId('ProfileCard.firstname'))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, userEvent.clear(screen.getByTestId('ProfileCard.surname'))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, userEvent.type(screen.getByTestId('ProfileCard.surname'), 'user')];
                case 5:
                    _a.sent();
                    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
                    expect(screen.getByTestId('ProfileCard.surname')).toHaveValue('user');
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'))];
                case 6:
                    _a.sent();
                    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
                    expect(screen.getByTestId('ProfileCard.surname')).toHaveValue('admin');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Должна появиться ошибка', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentRender(_jsx(EditableProfileCard, { id: "1" }), options);
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, userEvent.clear(screen.getByTestId('ProfileCard.firstname'))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))];
                case 3:
                    _a.sent();
                    expect(screen.getByTestId('EditableProfileCard.paragraph')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockPutReq;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockPutReq = jest.spyOn($api, 'put');
                    componentRender(_jsx(EditableProfileCard, { id: "1" }), options);
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))];
                case 3:
                    _a.sent();
                    expect(mockPutReq).toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
});
