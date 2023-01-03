import React from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {Box, Typography, Button} from "@mui/material";
import SubNavBar from "../../src/components/SubNavBar";

export default function CarContinue() {
    return (
        <MobileLayout title='yet to be inspected' backgroundColor='#000'>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <SubNavBar header='home'/>
                <div className="py-2 px-4" style={{height: '84vh'}}>
                    <Typography variant="body1">View details</Typography>
                    <div className="text-center mt-3 mb-2">
                        <img src='/images/sample/car-detail.png' style={{height: 100, width: 'auto'}} alt="detail_image"/>
                        <Typography variant="subtitle2" className="fw-bold my-3">Toyota Corolla 2022</Typography>
                        <div className="d-flex justify-content-center">
                            <Typography variant="caption" className="px-2" sx={{borderRadius: '20px', color: '#439F6E', backgroundColor: '#C8E6C9'}}>Inspection completed</Typography>
                        </div>
                    </div>
                    <div className="d-flex my-2">
                        <div className="flex-grow-1 small text-black-50">Owner's Name</div>
                        <div className="fw-bold small">Abebayo Shittu</div>
                    </div>

                    <div className="d-flex my-2">
                        <div className="flex-grow-1 small text-black-50">Available Date</div>
                        <div className="fw-bold small">June 13 | 2022 </div>
                    </div>

                    <div className="d-flex my-2">
                        <div className="flex-grow-1 small text-black-50">Owner’s phone no.</div>
                        <div className="fw-bold small">+2348035456623</div>
                    </div>

                    <div className="d-flex my-2">
                        <div className="flex-grow-1 small text-black-50">Owner’s review</div>
                        <div className="fw-bold small">Good condition</div>
                    </div>
                    <div className="fw-bold my-3">Owner's address</div>
                    <div className="small text-black-50">
                        Phasellus ultrices, velit a feugiat placerat, massa odio efficitur orci, porttitor varius ligula
                        ipsum in arcu. Praesent tempus mi nisi, ut tempus libero porta eget.
                    </div>
                </div>
                <div className="px-4" style={{width: '100%'}}>
                    <div className="row">
                        <div className="col-5">
                            <Button variant="outlined" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                                Download report
                            </Button>
                        </div>

                        <div className="col-7">
                            <Button variant="contained" size="small" fullWidth sx={{textTransform: 'none', py: 1, borderRadius: 2, fontSize: 12}}>
                                Preview report
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
        </MobileLayout>
    )
}
