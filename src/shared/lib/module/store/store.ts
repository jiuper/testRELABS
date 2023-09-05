import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userDataReducer} from "../../../../entities/User/module/store";
import {baseRTKQuery} from "../../../api/config/baseRTKQuery";

export const rootReducer = combineReducers({
    userDataReducer,
    [baseRTKQuery.reducerPath]: baseRTKQuery.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseRTKQuery.middleware)
    })
}



export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]