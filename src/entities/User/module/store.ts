import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {IUserDate, UserItem} from "../type/user.type";
import {getUsers} from "../api/fetchAllUser";

interface InitDate {
    user: IUserDate | null
    event: UserItem[]
}

const initialState: InitDate = {
    user: null,
    event: [],
}

export const userData = createSlice({
    name: "userDate",
    initialState,
    reducers: {
        AddEvent(state, action: PayloadAction<UserItem>) {
            state.event.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addMatcher(getUsers.matchFulfilled, (state: InitDate, action) => {
            state.user = action.payload;
        });
    }
})

export const {AddEvent} = userData.actions
export const userDataReducer = userData.reducer