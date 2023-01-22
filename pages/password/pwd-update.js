import React, {useState} from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {
    Box,
    Typography,
    Button, InputLabel, Input, InputAdornment, IconButton, FormControl, Link
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouter} from "next/router";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SubNavBar from "../../src/components/SubNavBar";

export default function PasswordUpdate() {

    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    
    
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCurrentPasswordIconClick = () => setShowCurrentPassword(!showCurrentPassword);
    const handlePasswordIconClick = () => setShowPassword(!showPassword);
    const handleConfirmPasswordIconClick = () => setShowConfirmPassword(!showConfirmPassword);

    const handlePasswordChange = () => {
        //change password logic
        router.push('/password/updated');
    };


    return (
        <MobileLayout title="Update Password" backgroundColor={'#000'}>
           
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
              <SubNavBar header='Update password'/>
                    <div className="mx-4" style={{marginTop: 10, height: "80vh"}}>

                        <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="current-password">Current Password</InputLabel>
                            <Input
                                id="current-password"
                                fullWidth
                                type={showCurrentPassword ? 'text' : 'password'}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleCurrentPasswordIconClick}
                                            onMouseDown={handleCurrentPasswordIconClick}
                                            edge="end"
                                            sx={{color:"#56A0D7"}}
                                        >
                                            {showCurrentPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

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
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
                                            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Typography sx={{textAlign: 'center', mt:5,fontSize: 13.5}}>
                        Forgot Password?
                        <Box
                            component="a"
                            variant="caption"
                            onClick={() => router.push('/password/reset')}
                            sx={{pl: 0.5, textDecoration: "none", cursor:'pointer'}}
                        >
                            Reset Now
                        </Box>
                        </Typography>
                        {/* <Typography sx={{textAlign: 'center', mt:5}}>Forogot Password? <Link style={{textDecoration: "none", cursor: "pointer"}} to="/password/reset">Reset Now</Link></Typography> */}
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
