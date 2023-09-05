import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {IUserDate} from "../type/user.type";
import {getUsers} from "../api/fetchAllUser";
import type {UserItem} from "../type/user.type";

interface InitDate {
    user: IUserDate | null
    event: UserItem | null
}

const initialState: InitDate = {
    user: null,
    event: null,
}

export const userData = createSlice({
    name: "userDate",
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<UserItem>) {
            state.event = action.payload
        }
    },
    extraReducers: builder => {
        builder.addMatcher(getUsers.matchFulfilled, (state: InitDate, action) => {
            state.user = action.payload;
        });
    }
})

export const {addEvent} = userData.actions
export const userDataReducer = userData.reducer