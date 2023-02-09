import { createSlice } from "@reduxjs/toolkit";


export const stageReducer = createSlice({
    name: 'stage',
    initialState: {
        stageNum: 1
    },
    reducers: {
        nextStage: (state) => {
            state.stageNum += 1
        },
        prevStage: (state) => {
            state.stageNum -= 1
        },
        reset: (state) => {
            state.stageNum = 1
        },
        gotoStage: (state, action)  => {
            state.stageNum = action.payload
        }


    }
});

export const {nextStage, prevStage, reset, gotoStage} = stageReducer.actions

export default stageReducer.reducer