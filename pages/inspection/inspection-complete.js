import React from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import { useRouter } from "next/router";


export default function InspectionComplete() {
    const router = useRouter();


    return (
        <MobileLayout title="inspection complete" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div style={{height: "85vh"}}>
                    <div className="d-flex justify-content-start"></div>
                    <div className="mx-4 px-4 text-center" style={{marginTop: 150}}>
                        <img src="/images/checked.png" alt="checked" style={{height: 80}} />
                        <div className="text-center mb-5">
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px",}}>
                                Inspection completed
                            </Typography>
                            <Typography variant="body2" sx={{mt: 1, mx: 0}}>
                                 Congratulation, you have completed the inspection stages.
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
                    <Box component="div" sx={{
                            textAlign: "center",
                            flexGrow: 1,
                            mt: 3,
                            width: "100%",
                        }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => router.push('/home')}
                            sx={{py: 1,fontSize:12, mb: 2, textTransform: "none", borderRadius: 3}}>
                            Back to Homepage
                        </Button>

                    </Box>
                    <Box
                        component="div"
                        sx={{
                            textAlign: "center",
                            flexGrow: 1,
                            mt: 3,
                            width: "100%", 
                        }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => router.push('/inspection/preview')}
                            sx={{py: 1, mb: 2, fontSize:12, textTransform: "none", borderRadius: 3, '&:hover': { color: '#fff',}}}>
                            Preview
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
