import { createApi} from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './AxiosBase';

export const baseRTKQuery = createApi({
    baseQuery: axiosBaseQuery(),
    reducerPath: 'baseRTKQuery',
    tagTypes: ['Users', 'Event'],
    endpoints: () => ({}),
});