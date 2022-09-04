import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

interface LocationItem {
    name: string;
    region: string;
    country: string;
}

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


    return(
        <div>
            <Autocomplete
                id="autoselect-complex"
                options={locations}
                getOptionLabel={(location: LocationItem) => location.name}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label='Locations'
                        placeholder='Select Location'
                        variant='outlined'
                    />
                }  
                renderOption={(props, option: LocationItem) => (
                    <li {...props}>
                        <div className='name'>
                            {option.name}
                        </div>
                        <div className='region'>
                            {option.region}
                        </div>
                        <div className='country'>
                            {option.country}
                        </div>
                    </li>
                )}               
            />
        </div>
    )
};

export default AutoSelect;