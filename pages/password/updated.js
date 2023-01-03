import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";

export default function Updated() {

    const router = useRouter();

    return (
        <MobileLayout title="inspection login pages" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div style={{height: "85vh"}}>
                    <div className="d-flex justify-content-start">
                        <div className="m-2">
                            <ArrowBackIcon onClick={() => router.back()}/>
                        </div>
                    </div>

                    <div className="mx-4 px-4 text-center" style={{marginTop: 70}}>
                        <img src="/images/checked.png" alt="checked" style={{height: 80}} />
                        <div className="text-center mb-5">
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px", mx: 2}}>
                                Password Updated Successfully
                            </Typography>
                            <Typography variant="body2" sx={{mt: 1, mx: 0}}>
                                We’ve successfully updated your password
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
                            href={'/login'}
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                        >
                            Login
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
