import React, {useState, useEffect} from "react";
import TopNavBar from "../../src/components/TopNavBar";
import InspectionLayout from "../../src/layouts/InspectionLayout";
import {Grid, Box, Typography, Button} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {notifications} from '../../src/utils/temp-data';
import { RotateRight } from "@mui/icons-material";
import { useRouter } from 'next/router';


export default function NotificationIndex() {

    const router = useRouter();
    const [messages, setMessages] = useState(notifications);

    useEffect(()  => {
        setMessages(messages)
    }, [messages])


    return(
        <InspectionLayout activeNav={2} title="notification" backgroundColor={'#000'} topbar={<TopNavBar text="Notification"/>}>
            <div style={{margin: '0px 20px'}}>
            <div className="py-3">
                <div className="small fw-bold">Recent</div>
            </div>
            {
              messages.map((message) => (
                <div key={message.id} className="mt-3">
                <Grid container spacing={1}>
                    <Grid item xs={2} sx={{pl:0,  display: "flex",  whiteSpace: "pre-line", background:"#243773", color: '#fff', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    {message.date}
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={{height: "inherit", alignSelf: "center"}}>
                        <Typography variant="body2" sx={{ml: 1, fontSize: '12px'}}>carpadi- Inspection</Typography>

                            <Typography variant="body2" sx={{ml: 1, fontSize: '12px'}}><span style={{fontWeight: '600', fontSize: '16px'}}>{message.car} | </span>has just been Assigned to you</Typography>
                            <Box component="div" sx={{display: "flex"}}>
                                <LocationOnIcon sx={{width:'20px' }}/>
                                <Typography variant="body2">{message.location}</Typography>
                            </Box>
                            <Button onClick={() => router.push(`/notification/${message.id}`)} variant="text" style={{display: "block",float: "right", textTransform: 'capitalize'}}>View details</Button>
                        </Box>
                    </Grid>
                </Grid>
                
            </div>

            ))
            }
           
            
            </div>
        </InspectionLayout>
    )
}
