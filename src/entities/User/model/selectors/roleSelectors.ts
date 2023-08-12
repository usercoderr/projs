import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { EUserRole } from '../consts/consts';

export const getUserRoles = (state:StateSchema) => state.user.authData?.roles;
export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => Boolean(
        roles?.includes(EUserRole.ADMIN),
    ),
);
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(
    roles?.includes(EUserRole.MANAGER),
));
