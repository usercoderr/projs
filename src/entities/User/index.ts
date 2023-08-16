export { initAuthData } from './model/services/initAuthData';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export {
    getJsonSettings,
    useJsonSettings,
} from './model/selectors/jsonSettings';

export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export { userActions, userReducer } from './model/slices/userSlice';

export { EUserRole } from './model/consts/consts';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';

export { getUserAuthData } from './model/selectors/getUserAuthData';

export type { IUser, IUserSchema } from './model/types/user';
