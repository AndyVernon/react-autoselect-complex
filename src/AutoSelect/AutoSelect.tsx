import React from 'react';
import { Autocomplete, TextField, Card, CardContent, Grid, Typography } from '@mui/material';

const AutoSelect = () => {

    const locations = [
        {
            name: "Dubai",
            region: "",
            country: "UAE"
        },
        {
            name: "Maldives",
            region: "",
            country: "Maldives"
        },
        {
            name: "Mauritius",
            region: "",
            country: "Mauritius"
        },
        {
            name: "Los Angeles",
            region: "California",
            country: "USA"
        },
        {
            name: "San Francisco",
            region: "California",
            country: "USA"
        },
        {
            name: "New York",
            region: "New York State",
            country: "USA"
        },
        {
            name: "New Orleans",
            region: "Louisiana",
            country: "USA"
        },
        {
            name: "New Dehli",
            region: "Northern India",
            country: "India"
        }
    ];

    function Location({location}) {
        return (
            <Card>
                <CardContent>
                    <Typography>{location.name}</Typography>
                    <Typography variant='h6' component='h2'>
                        {location.region}
                    </Typography>
                    <Grid container>
                        <Typography>
                            {location.country}
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        );
    };

    return(
        <div>
            <Autocomplete
                id="autoselect-complex"
                options={locations}
                getOptionLabel={(location) => location.name}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label='Locations'
                        placeholder='Select Location'
                        variant='outlined'
                    />
                }  
                renderOption={(item) => <Location location={item} />}               
            />
        </div>
    )
};

export default AutoSelect;