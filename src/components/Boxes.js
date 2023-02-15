import { useState } from "react";

import React from 'react'
import { Box,Grid, } from "@mui/material";


const Boxes = ({id, rating, updateRating}) => {
    

    return (
        <Grid item xs={4} sx={{ ml: 0, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Box onClick={() => updateRating(id, 'good')} sx={{ width: 21, textAlign: 'center', color: '#BCFFDB', background: '#439F6E', opacity: `${rating === 'good' ? '1' : '0.2'}`, borderRadius: '2px', cursor: 'pointer' }}>G</Box>
                <Box onClick={() => updateRating(id, 'fair')} sx={{ width: 21, textAlign: 'center', color: '#FFEBA5', background: '#FFB82E', opacity: `${rating === 'fair' ? '1' : '0.2'}`, borderRadius: '2px', cursor: 'pointer' }}>F</Box>
                <Box onClick={() => updateRating(id, 'bad')} sx={{ width: 21, textAlign: 'center', color: '#FFC1C1;', background: '#F93232', opacity: `${rating === 'bad' ? '1' : '0.2'}`, borderRadius: '2px', cursor: 'pointer' }}>P</Box>
        </Grid>
    )
}

export default Boxes