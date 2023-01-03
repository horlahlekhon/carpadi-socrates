import React, {useState} from "react";
import {Box, AppBar, Toolbar, IconButton, Typography, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopNavBar() {
    const [searching, setSearching] = useState(false);

    const handleSearch = () => {

    };

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, flexGrow: 1, display: 'flex', justifyContent: 'start'}}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton
                        size="large"
                        aria-label="search"
                        onClick={handleSearch}
                        color="inherit"
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
