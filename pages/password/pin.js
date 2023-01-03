import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";
import { MuiOtpInput } from "mui-one-time-password-input";

export default function Pin() {

    const router = useRouter();
    const [pin, setPin] = useState('');

    const handlePinChange = (value) => setPin(value);
    const handlePinSubmit = () => {
        //api logic for pin reset
        router.push('/password/reset');
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
                        <div className="text-center mb-5">
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px"}}>
                                Enter Reset PIN
                            </Typography>
                            <Typography variant="body2" sx={{mt: 1, mx: 4}}>
                                Kindly enter the provided PIN in your mail to reset your password
                            </Typography>
                        </div>
                        <MuiOtpInput
                            value={pin}
                            onChange={handlePinChange}
                            length={6}
                            TextFieldsProps={{ disabled: true, size: 'small', placeholder: '-'}}
                        />
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
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                            onClick={handlePinSubmit}
                        >
                            Proceed
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
