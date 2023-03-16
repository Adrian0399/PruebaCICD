
// ----------------------------------------------------------------------

import { Box, Grid, Skeleton } from "@mui/material";

export default function LoadingScreen() {


  return (
    <>
      <Grid item xs={12}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    </>
  );
}
