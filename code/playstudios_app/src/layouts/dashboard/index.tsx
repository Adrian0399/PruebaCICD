import { Grid } from '@mui/material';
import ContainerApp from 'components/container-app';
import HeaderApp from 'components/header-app';
import BottomApp from 'src/components/bottom-app';
import GuestGuard from '../../auth/GuestGuard';


// ----------------------------------------------------------------------
export default function DashboardLayout() {

  return (
    <GuestGuard>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <HeaderApp />
        </Grid>
        <Grid item xs={12} sx={{marginBottom: '12px'}}>
          <ContainerApp />
        </Grid>
        <Grid item xs={12}>
          <BottomApp />
        </Grid>
      </Grid>
    </GuestGuard>
  );
}
