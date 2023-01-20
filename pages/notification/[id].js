import React from "react";
import MobileLayout from "../../src/layouts/MobileLayout";
import {Box, Typography, Button} from "@mui/material";
import SubNavBar from "../../src/components/SubNavBar";
import {useRouter} from "next/router";

export default function NotificationCarDetail() {
    const router = useRouter();
    const id = router.query.id;
    return (
        <MobileLayout title='notification' backgroundColor='#000'>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <SubNavBar header='Notification'/>
                <div className="py-2 px-4" style={{height: '84vh'}}>
                    <Typography variant="body1" sx={{fontWeight: "500"}}>View details</Typography>
                    <div className="text-center mt-3 mb-5">
                        <img src='/images/sample/car-detail.png' style={{height: 100, width: 'auto'}} alt="detail_image"/>
                        <Typography variant="subtitle2" className="fw-bold my-3">Toyota Corolla 2022</Typography>
                        <div className="d-flex justify-content-center">
                            <Typography variant="caption" className="px-2" sx={{borderRadius: '20px', color: ' #56A0D7', backgroundColor: '#CEDAFF'}}>Available</Typography>
                        </div>
                    </div>
                    <div className="d-flex mt-2 my-4">
                        <div className="flex-grow-1 small text-black-50">Owner's Name</div>
                        <div className="fw-bold small">Yusuf Adebayo</div>
                    </div>

                    <div className="d-flex my-4">
                        <div className="flex-grow-1 small text-black-50">Available Date</div>
                        <div className="fw-bold small">June 13 | 2022 </div>
                    </div>

                    <div className="d-flex my-4">
                        <div className="flex-grow-1 small text-black-50">Owner’s phone no.</div>
                        <div className="fw-bold small">+234 0123456789</div>
                    </div>

                    <div className="d-flex my-4">
                        <div className="flex-grow-1 small text-black-50">Owner’s review</div>
                        <div className="fw-bold small">Good condition</div>
                    </div>
                    <div className="fw-bold my-3">Owner's address</div>
                    <div className="small text-black-50">
                        Phasellus ultrices, velit a feugiat placerat, massa odio efficitur orci, porttitor varius ligula
                        ipsum in arcu. Praesent tempus mi nisi, ut tempus libero porta eget.
                    </div>
                </div>
                <div className="px-4 my-5" style={{width: '100%'}}>
                    <Button
                        href={`/home/${id}/continue`}
                        variant="contained"
                        fullWidth
                        sx={{
                            textTransform: 'none',
                            py: 1,
                            '&:hover': {
                                color: '#fff',
                              },
                        }}
                    >
                        Start Inspection
                    </Button>
                </div>
            </Box>
        </MobileLayout>
    )
}
