import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    // email: null,
    // userName: null,
    token: null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action="") => {

            // state.email = action.payload.email;
            state.isLoggedIn = true;
            // state.userName = action.payload.userName;
            // state.token = action.payload.token;
        },
        setSignOut: (state) => {
            // state.email = null;
            // state.userName = null;
            state.isLoggedIn = false;
            state.token = null;
        },
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectEmail = (state) => state.userAuth.email;
// export const selectUserName = (state) => state.userAuth.userName;

export default authSlice.reducer;
