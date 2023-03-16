import { Card, CardMedia, Divider, Grid } from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import BackLink from 'src/components/back-link';
import Label from 'src/components/label';
import Section from 'src/components/section';
import Spacing from 'src/components/spacing';
import { RootState } from 'src/store';
import RewardCarousel from './reward-carousel';


// ----------------------------------------------------------------------

export default function FeatureDetail() {

  const { featured } = useSelector((state: RootState) => state);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title> PlayStudio | Detail Featured</title>
      </Helmet>
      <>
        <Section>
          <BackLink title='Home' />
          <Spacing size={4} />
          <Grid container spacing="16">
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Card sx={{ boxShadow: 'none', margin: '0px' }}>
                  <CardMedia
                    height="193"
                    component="img"
                    image={featured.current?.image}
                    loading="lazy"
                  />
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Label variant="H1_B">ARIA</Label>
                <Label variant="H3_R" color="secondary">Madalay Bay Resort and Casino</Label>
              </Grid>
              <Spacing size={4} />
              <Grid item xs={12}>
                <Label variant="default">Enjoy two glasses of champagne at Prime with the purchase of an appetizer or meal. Award-winning, four star celebrity chef andrestauranteur, Jean-Georges Vangerchten invites you to realize steakhouse dining at it’s finest with prime streak, seafood and lamb accompanied by fabulous sauces, sides and meticulously selected wines.</Label>
              </Grid>
            </Grid>

          </Grid>

        </Section>

        <Divider variant="fullWidth" style={{ marginTop: 16, marginLeft: 18 }} />
        <Section>
          <Label variant="H3_M" bottom={6} top={16}>All Rewards at ARIA</Label>
        </Section>
        <RewardCarousel />
      </>
    </>
  );
}
