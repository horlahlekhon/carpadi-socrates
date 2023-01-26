import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button, InputLabel, Input, InputAdornment, IconButton, FormControl
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Reset() {

    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordIconClick = () => setShowPassword(!showPassword);
    const handleConfirmPasswordIconClick = () => setShowConfirmPassword(!showConfirmPassword);

    const handlePasswordChange = () => {
        //change password logic
        router.push('/password/updated');
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
                        <div className="text-center mb-3">
                            <Typography variant="subtitle1" sx={{mt: 3, fontWeight: "bold", fontSize: "20px"}}>
                                Reset Password
                            </Typography>
                        </div>

                       
                        <FormControl sx={{ mt: 2}} variant="standard" fullWidth>
                            <InputLabel htmlFor="new-password">New Password</InputLabel>
                            <Input
                                id="new-password"
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
                                            sx={{color:"#56A0D7"}}
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl sx={{ mt: 2}} variant="standard" fullWidth>
                            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                            <Input
                                id="confirm-password"
                                fullWidth
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleConfirmPasswordIconClick}
                                            onMouseDown={handleConfirmPasswordIconClick}
                                            edge="end"
                                            sx={{color:"#56A0D7"}}
                                        >
                                            {showConfirmPassword ? <VisibilityOffIcon  /> : <VisibilityIcon  />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
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
                            onClick={handlePasswordChange}
                            sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3}}
                        >
                            Update Password
                        </Button>

                    </Box>
                </Box>
            </Box>
        </MobileLayout>
    )
}
