import React from "react";
import MobileLayout from "./MobileLayout";
import {Box} from "@mui/material";
import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import {useRouter} from "next/router";

export default function InspectionLayout({children,bodyHeight="85vh", title="", backgroundColor="#fff", topbar, activeNav}) {
    const router = useRouter();

    const handleBottomNavigation = (value) => {
        switch (value) {
            case 0:
                return router.push('/home');
            case 1:
                return router.push('/inspection');
            case 2:
                return router.push('/notification');
            case 3:
                return router.push('/account');
            default:
                return router.push('/home');
        }
    };
    return (
        <MobileLayout title={title} backgroundColor={backgroundColor}>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                {topbar}
                <Box sx={{height: bodyHeight, overflow: 'scroll', width: '100%',}}>
                    {children}
                </Box>
                <BottomNavBar onBottomNavItemClick={handleBottomNavigation} activeNav={activeNav}/>
            </Box>
        </MobileLayout>
    )
}
