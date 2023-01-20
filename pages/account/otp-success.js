import React from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";


export default function OtpSuccess() {


    return (
        <MobileLayout title="otp success" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div style={{height: "85vh"}}>
                    <div className="d-flex justify-content-start"></div>
                    <div className="mx-4 px-4 text-center" style={{marginTop: 90}}>
                        <img src="/images/checked.png" alt="checked" style={{height: 80}} />
                        <div className="text-center mb-5">
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px",}}>
                               Verification Successful
                            </Typography>
                            <Typography variant="body2" sx={{mt: 1, mx: 0}}>
                            Your phone number OTP verification was successful
                            </Typography>
                        </div>
                    </div>
                </div>
                <Box
                    component="div"
                    sx={{
                        height: "15vh",
                        display: "flex",
                        mx: 4,
                        alignItems: "baseline",
                    }}
                >
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
                            href={'/account'}
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3, '&:hover': { color: '#fff',}}}>
                            Ok
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
