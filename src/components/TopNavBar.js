import React, {useState} from "react";
import {Box, AppBar, Toolbar, IconButton, Typography, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function TopNavBar({text}) {
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
                        <FilterListIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'block' }}>
                        {text}
                    </Typography>

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
