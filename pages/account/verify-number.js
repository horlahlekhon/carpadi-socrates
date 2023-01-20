import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import {useRouter} from "next/router";
import { MuiOtpInput } from "mui-one-time-password-input";
import SubNavBar from "../../src/components/SubNavBar";

export default function VerifyNumber() {

    const router = useRouter();
    const [pin, setPin] = useState('');

    const handlePinChange = (value) => setPin(value);
    const handlePinSubmit = () => {
        //api logic for pin reset
        router.push('/account/otp-success');
    };

    return (
        <MobileLayout title="verify number" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <SubNavBar header='Verify Phone Number'/>

                    <div className="mx-4" style={{marginTop: 40, height: "70vh"}}>
                        <div className="mb-3">
                            <Typography sx={{fontWeight: "bold", fontSize: "14px"}}>
                                Enter received OTP to verify
                            </Typography>
                        </div>
                        <MuiOtpInput
                           className="border-0"
                            value={pin}
                            onChange={handlePinChange}
                            length={6}
                            TextFieldsProps={{ size: 'small', placeholder: '-'}}
                        />
                    </div>
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
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
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                            onClick={handlePinSubmit}>
                            Verify
                        </Button>

                    </Box>
                </Box>
                </Box>
        </MobileLayout>
    )
}
