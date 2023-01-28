import React from "react";
import MobileLayout from "../src/layouts/MobileLayout";
import {Box, Typography} from "@mui/material";

export default function Splash() {
    return(
        <MobileLayout title="welcome splash screen">
            <Box
                component="div"
                sx={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#243773"
                }}
            >
                <div className="d-flex align-items-center">
                    <Box
                        component="img"
                        src="/images/logo.png"
                        alt="logo"
                    />
                    <Typography variant="h4" sx={{color: "#fff", ml: 1, textTransform: "uppercase"}}>Carpadi</Typography>
                </div>
            </Box>
        </MobileLayout>
    )
}
