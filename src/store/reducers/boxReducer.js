import { createSlice } from "@reduxjs/toolkit";


export const boxReducer = createSlice({
    name: 'box',
    initialState: {
        selectedBox: null
    },
    reducers: {
        setSelectedBox: (state, action) => {
            state.selectedBox = action.payload
        }
    }
})


export const { setSelectedBox } = boxReducer.actions

export default boxReducer.reducer