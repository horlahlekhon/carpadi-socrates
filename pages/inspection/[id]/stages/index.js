import React from 'react'
import { useRouter } from 'next/router';
import StageOne from './stage-one';
import StageTwo from './stage-two';
import StageThree from './stage-three';
import StageFour from './stage-four';
import StageFive from './stage-five';
import StageSix from './stage-six';
import StageSeven from './stage-seven';
import StageEight from './stage-eight';
import StageNine from './stage-nine';
import StageTen from './stage-ten';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../../../src/store/reducers/stageReducer';


export default function Stage() {
    const { stageNum } = useSelector(state => state.stage);
    const dispatch = useDispatch();

    //to reset stage back to 1 if stage number 
    //accidentally equate to 11
    if(stageNum === 11){
        dispatch(reset())
    }

    return (
        <div>
        {stageNum == 1 && <StageOne />}
        {stageNum == 2 &&  <StageTwo />}
        {stageNum == 3 &&  <StageThree />}
        {stageNum == 4 &&  <StageFour />}
        {stageNum == 5 &&  <StageFive />}
        {stageNum == 6 &&  <StageSix />}
        {stageNum == 7 &&  <StageSeven />}
        {stageNum == 8 &&  <StageEight />}
        {stageNum == 9 &&  <StageNine />}
        {stageNum == 10 &&  <StageTen />}
        </div>
        
    )
}
