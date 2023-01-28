import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Input,
    FormControl,
    InputLabel,
    Button
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";

export default function ForgotPassword() {

    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleProceedClick = () => {
        //api logic of sending pin to email
        router.push('/password/email-confirm');
    };

    return (
        <MobileLayout title="inspection login pages" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div className="d-flex justify-content-start">
                    <div className="m-2">
                        <ArrowBackIcon onClick={() => router.back()}/>
                    </div>
                </div>
                <div className="text-center mb-3">
                    <Typography sx={{fontSize: 20, fontWeight: "bold", mb: 3, mt: 1}}>Reset Password</Typography>
                    <Typography variant="body2">Enter to confirm your email address below maxw****7@gmail.com</Typography>
                </div>
                <div className="mx-4" style={{marginTop: 40}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="login-email">Enter your email address</InputLabel>
                        <Input
                            id="login-email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='on'
                        />
                    </FormControl>

                    <Box
                        component="div"
                        sx={{
                            textAlign: "center",
                            flexGrow: 1,
                            alignSelf: "baseline",
                            width: "100%",
                            mt: "420px",
                        }}
                    >
                        <Button
                            onClick={handleProceedClick}
                            variant="contained"
                            fullWidth
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                        >
                            Proceed
                        </Button>

                    </Box>
                </div>
            </Box>
        </MobileLayout>
    )
}
