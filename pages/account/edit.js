import React, {useState} from 'react'
import dayjs from 'dayjs';
import {
    Box,
    Input,
    FormControl,
    InputLabel,
    Button, 
    Grid
} from "@mui/material";
import MobileLayout from "../../src/layouts/MobileLayout";
import SubNavBar from "../../src/components/SubNavBar";
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NativeSelect from '@mui/material/NativeSelect';
import { useRouter } from 'next/router';


export default function Edit() {
    const router = useRouter();
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileLayout title='Edit Profile' backgroundColor='#000'>
            <Box sx={{height: "100%", width: "100%", backgroundColor: "#fff"}}>
                <SubNavBar header='Edit Profile'/>
            <div>
                <div className="mx-4" style={{marginTop: 20}}>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" fullWidth />
                        </FormControl>

                        <FormControl sx={{mt: 3}} variant="standard" fullWidth>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" fullWidth />
                        </FormControl>

                        <FormControl  sx={{mt: 3}} variant="standard" fullWidth>
                            <InputLabel htmlFor="company-name">Company Name</InputLabel>
                            <Input id="company-name" fullWidth />
                        </FormControl>


                        <Grid container sx={{mt: 4}}>
                            <Grid xs={6} sx={{pr: 1}}>
                                <MobileDatePicker
                                    label="Date Of Birth"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                            </Grid>
                            <Grid item xs={6} sx={{mt: 1}}>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Country
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue="Nigeria"
                                        inputProps={{
                                        name: 'country',
                                        id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                    </NativeSelect>
                                </FormControl>
                        </Grid>
                    </Grid>


                    <Grid container sx={{mt: 4}}>
                        <Grid xs={3} sx={{pr: 1}}>
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

                    <FormControl  sx={{mt: 3}} variant="standard" fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" fullWidth />
                        </FormControl>

                        <FormControl  sx={{mt: 3}} variant="standard" fullWidth>
                            <InputLabel htmlFor="address">Address</InputLabel>
                            <Input id="address" fullWidth />
                        </FormControl>
                        


                        <Box
                            component="div"
                            sx={{
                                textAlign: "center",
                                flexGrow: 1,
                                alignSelf: "baseline",
                                width: "100%",
                                mt: "180px",
                                mb: 5
                            }}>
                            <Button
                               onClick={() => router.push("/account")}
                                variant="contained"
                                fullWidth
                                sx={{py: 1, mb: 2, textTransform: "none", borderRadius: 3,'&:hover': { color: '#fff',}}}>
                                Save changes
                            </Button>
                            <Button  onClick={() => router.back()} variant="text" sx={{color: "#56A0D7", textTransform: 'capitalize', fontWeight: 500,fontSize: "16px",}}>Discard</Button>
                        </Box>
                        </div>
                    </div>
                </Box>
            </MobileLayout>
            </LocalizationProvider>
            )
}
