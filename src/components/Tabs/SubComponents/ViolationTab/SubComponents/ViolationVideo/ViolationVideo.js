import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styles from './styles.module.css';
function ViolationVideo(props) {
    const selectedViolation = props.selectedViolation;
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current?.load();
    }, [selectedViolation.violation_video_url]);

    return (
        <>
            <Box sx={{width: '100%', bgcolor: '#f2f2f2', height: '85vh', padding: '20px' }}>
                {selectedViolation.violation_video_url && <Typography variant='h5' component="div">{selectedViolation._id}</Typography>}
                {selectedViolation.violation_video_url &&
                    <>
                        <video ref={videoRef} className={styles.videoStyle} controls>
                            <source src={selectedViolation.violation_video_url} type="video/mp4" />
                        </video>
                        
                        <div className={styles.idListContainer}>
                                <div>
                                    <Typography
                                        sx={{
                                                textDecoration: 'underline #808080',
                                                textUnderlineOffset: '0.5rem',
                                                color: '#808080',
                                                marginBottom: '1rem'
                                            }}
                                        textAlign='center'
                                        variant="h6"
                                        gutterBottom
                                        component="div">Violation Vehicle Ids</Typography>
                                </div>
                                <div className={styles.idList}>
                                    {   
                                        selectedViolation.violation_vehicle_ids.map((id)=>
                                            <span className={styles.idBadges}>{id}</span>
                                        )
                                    }
                                </div>
                        </div>
                    </>
                }
            </Box>
        </>
    );
}

export default ViolationVideo;