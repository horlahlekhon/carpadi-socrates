import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Paper, Box} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person3Icon from '@mui/icons-material/Person3';

export default function BottomNavBar({onBottomNavItemClick, activeNav}){
    const [page, setPage] = useState(activeNav);

    const handleChange = (value) => {
        if (page !== value) {
            onBottomNavItemClick(value);
            setPage(value);
        }
    };
    return (
        <Paper sx={{position: 'sticky', top:"100%", bottom: 0, left: 0, right: 0,}} elevation={3} >
            <BottomNavigation
                showLabels
                value={page}
                onChange={(event, newValue) => {
                    handleChange(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Inspected" icon={<DirectionsCarIcon />} />
                <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} />
                <BottomNavigationAction label="Account" icon={<Person3Icon />} />
            </BottomNavigation>
        </Paper>
    )
}
