import { useState } from "react";

import React from 'react'
import { Box,Grid, } from "@mui/material";


const Boxes = () => {
    const [selectedBox, setSelectedBox] = useState(null);

      //click function for each colored box
      const handleClick = (box) => {
        setSelectedBox(box);
    };


    return (
        <Grid item xs={4} sx={{ ml: 0, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                <Box onClick={() => handleClick('box1')} sx={{ width: 21, textAlign: 'center', color: '#BCFFDB', background: '#439F6E', opacity: `${selectedBox === 'box1' ? '1' : '0.2'}`, borderRadius: '2px', cursor: 'pointer' }}>G</Box>
                <Box onClick={() => handleClick('box2')} sx={{ width: 21, textAlign: 'center', color: '#FFEBA5', background: '#FFB82E', opacity: `${selectedBox === 'box2' ? '1' : '0.2'}`, borderRadius: '2px', cursor: 'pointer' }}>F</Box>
                <Box onClick={() => handleClick('box3')} sx={{ width: 21, textAlign: 'center', color: '#FFC1C1;', background: '#F93232', opacity: `${selectedBox === 'box3' ? '1' : '0.2'}`, borderRadius: '2px', cursor: 'pointer' }}>P</Box>
        </Grid>
    )
}

export default Boxes