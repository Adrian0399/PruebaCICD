import { Button, Card, CardMedia, Grid, SwipeableDrawer } from '@mui/material';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BackLink from 'src/components/back-link';
import Label from 'src/components/label';
import Section from 'src/components/section';
import Spacing from 'src/components/spacing';

import Panel from 'src/components/panel';

// ----------------------------------------------------------------------

import { PATH_AUTH } from 'src/router/paths';
export default function WalletDetail() {
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title> PlayStudio | Reward Featured</title>
      </Helmet>
      <>
        <Section>
          <BackLink title='History' link={PATH_AUTH.wallet} />
          <Spacing size={4} />
          <Grid container spacing="16">
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Card sx={{ boxShadow: 'none', margin: '0px', border: '2px solid #FF7A4A' }}>
                  <CardMedia
                    height="193"
                    component="img"
                    image="https://crowdsourcer.io/assets/images/no-img.png"
                    loading="lazy"
                  />
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Label variant="H1_B" bottom={11}>Champagne at Prime</Label>
                <Label variant="H3_R" color="secondary" bottom={4}>Bellagio Resort and Casino</Label>
                <Label variant="H3_SB">Las Vegas, United States</Label>
              </Grid>
              <Spacing size={4} />
              <Grid item xs={12} >
                <Label variant="default">Enjoy two glasses of champagne at Prime with the purchase of an appetizer or meal. Award-winning, four star celebrity chef andrestauranteur, Jean-Georges Vangerchten invites you to realize steakhouse dining at it’s finest with prime streak, seafood and lamb accompanied by fabulous sauces, sides and meticulously selected wines.</Label>
              </Grid>

              <Spacing size={4} />
              <Grid item xs={12} >
                <Button variant='reward' fullWidth onClick={() => { }} >Award Restrictions</Button>
                <Button variant='rewardCollection' fullWidth onClick={() => setTerms(true)}>Term and Conditions</Button>
              </Grid>
            </Grid>
          </Grid>
        </Section>

        <SwipeableDrawer
          variant="temporary"
          ModalProps={{
            keepMounted: false,
          }}
          anchor={'bottom'}
          open={terms}
          onClose={() => { setTerms(false) }}
          onOpen={() => { setTerms(true) }}
        >
          <Panel header="Terms and Conditions" onClose={() => { setTerms(false) }} variant="limit">
            <Label variant="default" top={26}>
              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e
            </Label>
          </Panel>
        </SwipeableDrawer>
      </>
    </>
  );
}
