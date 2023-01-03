import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";

export default function EmailConfirm() {

    const router = useRouter();
    const [email, setEmail] = useState('');

    const navigateToRegister = () => router.push('/register');

    const handleConfirmEmail = () => {
        //api logic for email verification
        router.push('/password/pin');
    };

    return (
        <MobileLayout title="inspection login pages" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div style={{height: "85vh"}}>
                    <div className="d-flex justify-content-start">
                        <div className="m-2">
                            <ArrowBackIcon onClick={() => router.back()}/>
                        </div>
                    </div>

                    <div className="mx-4" style={{marginTop: 70}}>
                        <div className="text-center">
                            <img src="/images/checked.png" alt="checked" style={{height: 80}} />
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px"}}>
                                Email Confirmed
                            </Typography>
                            <Typography variant="body2" sx={{mt: 8}}>Reset password?</Typography>
                            <div className="px-5">
                                <Button
                                    variant="text"
                                    sx={{
                                        textTransform: "none",
                                        mt: 1,
                                        mx: 4,
                                        fontSize: "18px",
                                        color: "#000",
                                    }}>
                                    Send Password Reset PIN
                                </Button>
                            </div>
                            <Typography variant="caption" sx={{mt: 2}}>
                                You can only update your password once in 30 days.
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
                            onClick={handleConfirmEmail}
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                        >
                            Proceed
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
