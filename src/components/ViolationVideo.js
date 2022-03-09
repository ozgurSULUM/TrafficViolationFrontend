import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function ViolationVideo(props) {
    const selectedViolation = props.selectedViolation;
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current?.load();
    }, [selectedViolation.violation_video_url]);

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: '#f2f2f2', height: '85vh', padding: '10px' }}>
                {selectedViolation.violation_video_url && <Typography variant='h5' component="div">{selectedViolation._id}</Typography>}
                {selectedViolation.violation_video_url &&
                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'black' }}>
                        <video ref={videoRef} width='100%' height='auto' controls>
                            <source src={selectedViolation.violation_video_url} type="video/mp4" />
                        </video>
                    </div>
                }
            </Box>
        </>
    );
}

export default ViolationVideo;