import {baseRTKQuery} from "../../../shared/api/config/baseRTKQuery";
import {addEvent} from "../module/store";

export const eventApi = baseRTKQuery.injectEndpoints({

    endpoints: build => ({
        getEvents: build.query<any, void>({
            queryFn: () => ({data: []}),

            async onCacheEntryAdded(_arg, {cacheEntryRemoved,dispatch}) {
                const socket = new WebSocket("wss://test.relabs.ru/event");
                socket.onopen = () => {
                    socket.onmessage = (message) => {
                        dispatch(addEvent(JSON.parse(message.data)))
                    }
                }

                await cacheEntryRemoved;
                socket.onclose = () => {
                };
            },
        }),
    }),
});

export const {useGetEventsQuery} = eventApi;


