import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ViolationList from './ViolationList';
import ViolationVideo from './ViolationVideo';
const Violationtab = (props) => {
    const [selectedViolation, setSelectedViolation] = useState({});
    return (
        <>
            <Grid container spacing={0} sx={{ height: '85vh' }}>
                <Grid item xs={8}>
                    <ViolationVideo selectedViolation={selectedViolation} />
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
                    <ViolationList
                        violations={props.violations}
                        selectedViolation={selectedViolation}
                        setSelectedViolation={setSelectedViolation} />
                </Grid>
            </Grid>
        </>
    );
};

export default Violationtab;