import { Box, Container, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

// ----------------------------------------------------------------------
export default function ContainerApp() {
    return (
        <>
            <Toolbar id="back-to-top-anchor" />

            <Container>
                <Box sx={{ my: 2 }}>
                    <Outlet />
                </Box>
            </Container>
        </>
    );
}
