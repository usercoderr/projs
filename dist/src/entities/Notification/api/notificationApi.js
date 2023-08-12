import { rtkApi } from '@/shared/api/rtkApi';
var notificationsApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getNotifications: build.query({
            query: function () { return ({
                url: '/notifications',
            }); },
        }),
    }); },
});
export var useNotifications = notificationsApi.useGetNotificationsQuery;
