import React, {useState} from "react";
import MobileLayout from "../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    InputAdornment,
    IconButton,
    Input,
    FormControl,
    InputLabel,
    Button
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useRouter} from "next/router";

export default function Register() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordIconClick = () => setShowPassword(!showPassword);
    const navigateToLogin = () => router.push('/login');

    return (
        <MobileLayout title="inspection register" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div className="d-flex justify-content-center align-items-center" style={{paddingTop:120}}>
                    <Box component="img" src="/images/logo-inverse.png" sx={{height: 50}}/>
                    <Typography
                        variant="h5"
                        sx={{color: "#243773", ml: 1, textTransform: "uppercase", fontWeight: "bold"}}
                    >
                        Carpadi
                    </Typography>
                </div>
                <div className="mx-4" style={{marginTop: 130}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="login-email">Email Address</InputLabel>
                        <Input
                            id="login-email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl sx={{ mt: 2}} variant="standard" fullWidth>
                        <InputLabel htmlFor="login-password">Password</InputLabel>
                        <Input
                            id="login-password"
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handlePasswordIconClick}
                                        onMouseDown={handlePasswordIconClick}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Box
                        component="div"
                        sx={{
                            textAlign: "center",
                            flexGrow: 1,
                            alignSelf: "baseline",
                            width: "100%",
                            mt: "180px",
                            mb: 5
                        }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                        >
                            SIgn Up
                        </Button>
                        <Typography variant="body2">Have an account?
                            <span style={{color: "#56A0D7", marginLeft: "5px", cursor: "pointer"}} onClick={navigateToLogin}>Log in</span>
                        </Typography>
                    </Box>
                </div>
            </Box>
        </MobileLayout>
    )
}
