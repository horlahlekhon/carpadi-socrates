import React from "react";
import {Box, Grid} from "@mui/material";
import Head from "next/head";


export default function MobileLayout({children, title="", backgroundColor="#fff"}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="description" content="Generated by create next app" />
                <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="row d-flex justify-content-center my-auto" style={{height: "100vh", backgroundColor: backgroundColor}}>
                    <div className="col-sm-12 col-md-5 col-lg-4">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}
