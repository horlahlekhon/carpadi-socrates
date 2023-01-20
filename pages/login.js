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

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordIconClick = () => setShowPassword(!showPassword);
    const navigateToRegister = () => router.push('/register');
    const handleLogin = () => {
        //api login logic here
        router.push('/home');
    };

    return (
        <MobileLayout title="inspection login pages" backgroundColor={'#000'}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <div className="d-flex justify-content-center align-items-center" style={{paddingTop:120}}>
                    <Box component="img" src="/images/logo-inverse.png"/>
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
                    <Box sx={{display: "flex", justifyContent: "start", mt: 2}}>
                        <Box
                            component="a"
                            variant="caption"
                            href="/"
                            sx={{flexGrow: 1, textDecoration: "none", fontSize: 13.5}}
                        >
                            Login with Phone
                        </Box>
                        <Box
                            component="a"
                            variant="caption"
                            href="/password/forgot"
                            sx={{textDecoration: "none", fontSize: 13.5}}
                        >
                            Forgot your password?
                        </Box>
                    </Box>
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
                            onClick={handleLogin}
                        >
                            Log in
                        </Button>
                        <Typography variant="body2">Don't have an account?
                            <span style={{color: "#56A0D7", marginLeft: "5px", cursor: "pointer"}} onClick={navigateToRegister}>Sign Up</span>
                        </Typography>
                    </Box>
                </div>
            </Box>
        </MobileLayout>
    )
}
