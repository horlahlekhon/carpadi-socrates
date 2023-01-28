import React from "react";
import {Box, IconButton, Toolbar, Typography, AppBar} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useRouter} from "next/router";

export default function SubNavBar({header='home'}) {
    const router = useRouter();
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="back"
                        sx={{ mr: 2 }}
                        onClick={() => router.back()}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                    <Box sx={{flexGrow: 1, textAlign: "center", marginLeft: "-30px"}}>
                        <Typography sx={{fontSize: "16px"}} component="div">{header}</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
