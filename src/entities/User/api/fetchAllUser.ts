import {baseRTKQuery} from "../../../shared/api/config/baseRTKQuery";
import {IUserDate} from "../type/user.type";
import {ROUTES_API} from "../const/RoutesApi";

export const usersApi = baseRTKQuery.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<IUserDate, number>({
            query: (offset) => ({url: ROUTES_API.user, params: {offset: offset}}),
            providesTags: [{type: 'Users'}],
            transformErrorResponse: (response: { status: string | number }) => response,
        }),
    }),
});

export const {useGetUsersQuery} = usersApi;

export const {
    endpoints: {getUsers},
} = usersApi;
