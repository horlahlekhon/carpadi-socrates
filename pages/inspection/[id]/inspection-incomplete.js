import React from "react";
import MobileLayout from "../../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { gotoStage } from '../../../src/store/reducers/stageReducer';



export default function InspectionIncomplete() {
    const router = useRouter();
    const dispatch = useDispatch();
    const id = router.query.id;


    return (
        <MobileLayout title="inspection incomplete" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div style={{height: "85vh"}}>
                    <div className="d-flex justify-content-start"></div>
                    <div className="mx-4 px-4 text-center" style={{marginTop: 150}}>
                        <img src="/images/error.png" alt="checked" style={{height: 80}} />
                        <div className="text-center mb-5">
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px",}}>
                                Inspection not completed
                            </Typography>
                            <Typography variant="body2" sx={{mt: 1, mx: 0}}>
                                Oops, your inspection has not been completed, kindly Re-check the stages
                            </Typography>
                        </div>
                    </div>
                </div>
                <Box component="div" sx={{
                        height: "15vh",
                        display: "flex",
                        gap:1,
                        mx: 4,
                        alignItems: "baseline",
                    }}>
                    <Box
                        component="div"
                        sx={{
                            textAlign: "center",
                            flexGrow: 1,
                            mt: 3,
                            width: "100%", 
                        }}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                router.push(`/inspection/${id}/stages`)
                                dispatch(gotoStage(1))
                            }}
                            sx={{py: 1, mb: 2, fontSize:12, textTransform: "none", borderRadius: 3, '&:hover': { color: '#fff',}}}>
                            Re-check 
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
