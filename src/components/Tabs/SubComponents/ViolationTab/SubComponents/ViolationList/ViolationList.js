import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const ViolationList = (props) => {
    const { violations, setSelectedViolation } = props;
    return (
        <>
            <Typography
                sx={
                    {
                        textDecoration: 'underline #808080',
                        textUnderlineOffset: '0.5rem',
                        color: '#808080',
                        marginBottom: '1rem'
                    }}
                textAlign='center'
                variant="h6"
                gutterBottom
                component="div">Violation List</Typography>
            <Box sx={{ width: '100%', maxWidth: 360 }}>
                <List sx={{
                    width: '100%',
                    bgcolor: '#f2f2f2',
                    overflow: 'auto',
                    height: '70vh',
                    '::-webkit-scrollbar': { width: '8px' },
                    '::-webkit-scrollbar-track': { background: '#d9d9d9' },
                    '::-webkit-scrollbar-thumb': { backgroundColor: '#999999', borderRadius: '4px', border: '3px solid #d9d9d9' }
                }}>
                    {violations.length !== 0 ?
                        violations.map((violation) => {
                            return (
                                <ListItem key={violation._id} disablePadding>
                                    <ListItemButton onClick={() => setSelectedViolation(violation)}>
                                        <ListItemText primary={violation._id} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                        :
                        <ListItem disablePadding>
                            <ListItemButton data-testid="empty-list-button" disabled>
                                <ListItemText primary={'Empty'} />
                            </ListItemButton>
                        </ListItem>

                    }
                </List>
            </Box>
        </>
    );
};

export default ViolationList;