import * as React from 'react';
import HomeBar from '../../components/homeBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './home.css'
export default function Home() {

    return (
        <React.Fragment>
            <HomeBar />
            <CssBaseline />
            <div className='main'>
                <Container>
                    <Box sx={{ bgcolor: 'black', height: '90vh' }} />
                </Container>
                <Container maxWidth='xl'>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }} />
                </Container>
            </div>
        </React.Fragment>
    );
}