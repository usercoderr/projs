import { rtkApi } from '@/shared/api/rtkApi';
import { IUser } from '../model/types/user';
import { IJsonSettings } from '../model/types/jsonSettings';

interface SetJsonSettingsArg{
userId: string,
  jsonSettings: IJsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({

        setJsonSettings: build.mutation<IUser, SetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),

        getJsonSettings: build.query<IUser, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),

    }),
});

export const setUserApiMutation = userApi.endpoints.setJsonSettings.initiate;
export const getUserApiQuery = userApi.endpoints.getJsonSettings.initiate;
