import React from "react";
import {Grid, Box, Typography, Button} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';

export default function CarItem({link, image_url, make, address, date}) {
    return(
        <Grid container spacing={1}>
            <Grid item xs={5} sx={{display: "flex", alignItems: "center"}}>
                <Box component="img" src={image_url} sx={{width: '100%', height: 'auto'}}/>
            </Grid>
            <Grid item xs={7}>
                <Box sx={{height: "inherit", alignSelf: "center"}}>
                    <Typography varaint="body2" sx={{fontWeight: 'bold',}}>{make}</Typography>
                    <Box component="div" sx={{display: "flex"}}>
                        <LocationOnIcon/>
                        <Typography variant="body2" sx={{height: "inherit", alignSelf: "center", ml: 1}}>{address}</Typography>
                    </Box>
                    <Box component="div" sx={{display: "flex"}}>
                        <EventIcon/>
                        <Typography variant="body2" sx={{height: "inherit", alignSelf: "center", ml: 1}}>{date}</Typography>
                    </Box>
                    <Button href={link} variant="contained" fullWidth sx={{textTransform: 'lowercase'}}>View Details</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
