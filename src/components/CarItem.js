import React from "react";
import {Grid, Box, Typography, Button} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useRouter } from "next/router";

export default function CarItem({carLink, image_url, model, address, date, button_text}) {
    
    const router = useRouter();

    return(
        <Grid container spacing={1}>
            <Grid item xs={5} sx={{display: "flex", alignItems: "center"}}>
                <Box component="img" src={image_url} sx={{width: 'auto', margin: '0 auto'}}/>
            </Grid>
            <Grid item xs={7}>
                <Box sx={{height: "inherit", alignSelf: "center"}}>
                    <Typography varaint="body2" sx={{fontWeight: 'bold',fontFamily: "Poppins, sans-serif"}}>{model}</Typography>
                    <Box component="div" sx={{display: "flex"}}>
                        <LocationOnIcon/>
                        <Typography variant="body2" sx={{height: "inherit", alignSelf: "center", ml: 1, fontFamily: "Poppins, sans-serif"}}>{address}</Typography>
                    </Box>
                    <Box component="div" sx={{display: "flex"}}>
                        <CalendarMonthIcon/>
                        <Typography variant="body2" sx={{height: "inherit", alignSelf: "center", ml: 1,fontFamily: "Poppins, sans-serif"}}>{date}</Typography>
                    </Box>
                    <Button onClick={() => router.push(`${carLink}`)} variant="contained" fullWidth 
                    sx={{mt: 1,
                         textTransform: 'capitalize',
                         fontFamily: "Poppins, sans-serif", 
                         '&:hover': { color: '#fff',}
                         }}>
                            {button_text}
                     </Button>
                </Box>
            </Grid>
        </Grid>
    )
}
