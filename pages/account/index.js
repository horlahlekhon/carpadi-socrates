import React from "react";
import TopNavBar from "../../src/components/TopNavBar";
import InspectionLayout from "../../src/layouts/InspectionLayout";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {Box, Typography, Button} from "@mui/material";

export default function AccountIndex() {
    return(
        <InspectionLayout activeNav={3} title="inspection account page" backgroundColor={'#000'} topbar={<TopNavBar text="Account Details"/>}>
                <div>
                    <Box sx={{
                        display:"flex",
                        width: 100,
                        height: 100,
                        backgroundColor: "#CEDAFF",
                        borderRadius: '50%',
                        margin:"35px auto",
                        alignItems: "center",
                        justifyContent: "center"
                        
                    }}>
                        <PersonOutlinedIcon sx={{width: 50, height: 50, color: "#fff"}}/>
                    </Box>
                    <Box sx={{ display:"flex", flexDirection: 'column', alignItems: 'center',}}>
                    <Typography sx={{fontSize: "12px"}}>Company Name</Typography>
                    <Typography sx={{fontSize: "20px", fontWeight: 500}}>Carpadi</Typography>
                    </Box>
                    <div className="py-4 px-4">
                        <Typography sx={{fontSize: "14px", fontWeight: 500,pb:1, borderBottom: '1px solid #F0F0F0'}}>Personal Information</Typography>
                             <div className="d-flex mt-3 my-4">
                                <div className="flex-grow-1 small text-black-50">First Name</div>
                                <div className="fw-bold small">Rundeno</div>
                            </div>

                            <div className="d-flex my-4">
                                <div className="flex-grow-1 small text-black-50">Last Name</div>
                                <div className="fw-bold small">Rundeno</div>
                            </div>

                            <div className="d-flex my-4">
                                <div className="flex-grow-1 small text-black-50">Date Of Birth</div>
                                <div className="fw-bold small">March 20, 1989</div>
                            </div>

                            <div className="d-flex my-4">
                                <div className="flex-grow-1 small text-black-50">Country Of Origin</div>
                                <div className="fw-bold small">Nigeria</div>
                            </div>
                            <div className="d-flex my-4">
                                <div className="flex-grow-1 small text-black-50">Phone Number</div>
                                <div className="fw-bold small"><Box component="a" href="/account/update-number">+234 0123456789</Box></div>
                            </div>
                            <div className="d-flex my-4">
                                <div className="flex-grow-1 small text-black-50">Email Address</div>
                                <div className="fw-bold small">james_rundeno47@gmail.com</div>
                            </div>
                            <Typography sx={{fontSize: "12px", color: '#439F6E', textAlign: 'center', fontWeight: 600, }}>Email Verified</Typography>
                    </div>
                    <div className="py-4 px-4">
                    <Typography sx={{fontSize: "14px", fontWeight: 500,pb:1, borderBottom: '1px solid #F0F0F0'}}>Address</Typography>
                    <Typography  sx={{fontSize: "12px", fontWeight: 300, pt:2}}>Phasellus ultrices, velit a feugiat placerat, massa odio efficitur orci, porttitor varius ligula ipsum in arcu. Praesent tempus mi nisi, ut tempus libero porta eget.</Typography>
                    </div>
                    <div className="px-4" style={{width: '100%'}}>
                    <Button
                        href={`/account/edit`}
                        variant="contained"
                        fullWidth
                        sx={{
                            textTransform: 'none',
                            py: 1,
                            '&:hover': {
                                color: '#fff',
                              },
                        }}>
                        Edit Profile
                    </Button>
                    <Button href="/password/pwd-update"sx={{textTransform: "capitalize", fontSize: 13.5}}>
                            Forgot your password?
                    </Button>
                </div>
                </div>
        </InspectionLayout>
    )
}
