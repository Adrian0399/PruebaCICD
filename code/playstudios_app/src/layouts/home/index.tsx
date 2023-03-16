import { Box, Grid, Toolbar } from '@mui/material';
import HeaderApp from 'components/header-app';
import { Outlet } from 'react-router-dom';
import BottomApp from 'src/components/bottom-app';
import GuestGuard from '../../auth/GuestGuard';

// ----------------------------------------------------------------------
export default function DashboardHomeLayout() {

  return (
    <GuestGuard>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <HeaderApp />
          <Toolbar id="back-to-top-anchor" />
        </Grid>
        <Grid item xs={12} >
          <Box sx={{ marginTop: '24px', marginBottom: '40px' }}>
            <Outlet />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <BottomApp />
        </Grid>
      </Grid>
    </GuestGuard>
  );
}
