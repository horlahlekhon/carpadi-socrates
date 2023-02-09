import React from 'react'
import {
    Box,
    Typography,
    Input,
    FormControl,
    InputLabel,
    Button, 
    Grid
} from "@mui/material";
import MobileLayout from "../../src/layouts/MobileLayout";
import SubNavBar from "../../src/components/SubNavBar";
import NativeSelect from '@mui/material/NativeSelect';
import { useRouter } from 'next/router';


export default function UpdateNumber() {

    const router = useRouter();

    return (
        <MobileLayout title='update number' backgroundColor='#000'>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <SubNavBar header='Update Phone Number'/>
                <div className="mx-4 my-5">
                    <div style={{marginTop: 20}}>
                      <Typography sx={{fontWeight:500, fontSize: 14 }}>Enter Current Phone Number</Typography>
                        <Grid container sx={{mt: 3}}>
                                <Grid item xs={3} sx={{pr: 1}}>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Country Code
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue="+234"
                                            inputProps={{
                                            name: 'country',
                                            id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value="+234">+234</option>
                                            <option value="+245">+245</option>
                                            <option value="+144">+144</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={9}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                                        <Input id="phone_number" fullWidth />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                            <div style={{marginTop: 50, height: "50vh"}}>
                                <Typography sx={{fontWeight:500, fontSize: 14 }}>Enter New Phone Number</Typography>
                                <Grid container sx={{mt: 3}}>
                                    <Grid item xs={3} sx={{pr: 1}}>
                                        <FormControl fullWidth>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                Country Code
                                            </InputLabel>
                                            <NativeSelect
                                                defaultValue="+234"
                                                inputProps={{
                                                name: 'country',
                                                id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value="+234">+234</option>
                                                <option value="+245">+245</option>
                                                <option value="+144">+144</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <FormControl variant="standard" fullWidth>
                                            <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                                            <Input id="phone_number" fullWidth />
                                        </FormControl>
                                    </Grid>
                                     </Grid>

                                </div>

                            <Box
                                component="div"
                                sx={{
                                    textAlign: "center",
                                    flexGrow: 1,
                                    alignSelf: "baseline",
                                    width: "100%",
                                }}>
                                <Button
                                    onClick={() => router.push("/account/verify-number")}
                                    variant="contained"
                                    fullWidth
                                    sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3, "&:hover": {
                                        color:"#fff"
                                    }}}>
                                    Proceed
                                </Button>
                                <Button  onClick={() => router.back()} variant="text" sx={{color: "#56A0D7", textTransform: 'capitalize', fontWeight: 500,fontSize: "16px"}}>Discard</Button>
                            </Box>
                     </div>
                </Box>
            </MobileLayout>
            )
}
