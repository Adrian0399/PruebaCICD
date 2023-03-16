import { Avatar, Button, Card, CardMedia, Grid, Modal, SwipeableDrawer, TextField, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BackLink from 'src/components/back-link';
import Label from 'src/components/label';
import PriceTag from 'src/components/price-tag';
import Section from 'src/components/section';
import Spacing from 'src/components/spacing';

import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import Panel from 'src/components/panel';

// ----------------------------------------------------------------------

import mgmIcon from 'src/assets/icons/mgm.svg';
import roomStayIcon from 'src/assets/icons/room-stay.svg';
import PurchaseFlow from '../Purchase/Flow';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';


export default function RewardDetail() {
  const { partners } = useSelector((state: RootState) => state);

  const [terms, setTerms] = useState(false);
  const [mgm, setMgm] = useState(false);
  const [available, setAvailable] = useState(false);
  const [purchase, setPurchase] = useState(false);

  const [caledarValue, setCaledarValue] = useState<Dayjs | null>(dayjs('2022-04-07'));

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
          <BackLink title='Home' />
          <Spacing size={4} />
          <Grid container spacing="16">
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <Card sx={{ boxShadow: 'none', margin: '0px' }}>
                  <CardMedia
                    height="193"
                    component="img"
                    image={partners.current?.image}
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

                <Spacing size={3} />
                <PriceTag variant='detail' value={234234234} />
              </Grid>
              <Spacing size={4} />
              <Grid item xs={12} >
                <Button variant="primary" fullWidth onClick={() => setPurchase(true)}>
                  <Typography variant="button" component="div">
                    Buy Now
                  </Typography>
                </Button>
              </Grid>
              <Spacing size={4} />
              <Grid item xs={12}>
                <Button variant="information" fullWidth onClick={() => setMgm(true)}>
                  <Grid container spacing="9">
                    <Grid alignItems="center" item display="flex" >
                      <Avatar
                        src={mgmIcon}
                        sx={{ width: 20, height: 20 }}
                      />
                    </Grid>
                    <Grid alignItems="center" item display="flex" xs={7} >
                      <Typography variant="H3_M" component="div" color="secondary">
                        MGM International Award
                      </Typography>
                    </Grid>
                    <Grid alignItems="center" item display="flex" xs={3}>
                      <Typography variant="H4_B" component="div" color="secondary">
                        Learn more
                      </Typography>
                    </Grid>
                  </Grid>

                </Button>
              </Grid>

              <Spacing size={4} />
              <Grid item xs={12} >
                <Button variant="information" fullWidth onClick={() => setAvailable(true)}>
                  <Grid container spacing="9">
                    <Grid alignItems="center" item display="flex" >
                      <img src={roomStayIcon}></img>
                    </Grid>
                    <Grid alignItems="center" item display="flex" xs={9} >
                      <Typography variant="H3_M" component="div" color="secondary">
                        Room stay required
                      </Typography>
                    </Grid>
                  </Grid>

                </Button>
              </Grid>

              <Spacing size={3} />
              <Grid item xs={12} >
                <Label variant="default">Enjoy two glasses of champagne at Prime with the purchase of an appetizer or meal. Award-winning, four star celebrity chef andrestauranteur, Jean-Georges Vangerchten invites you to realize steakhouse dining at it’s finest with prime streak, seafood and lamb accompanied by fabulous sauces, sides and meticulously selected wines.</Label>
              </Grid>

              <Spacing size={4} />
              <Grid item xs={12} >
                <Button variant='reward' fullWidth onClick={() => { }} >Award Restrictions</Button>

                <Button variant='rewardCollection' fullWidth onClick={() => setTerms(true)}>Term and Conditions</Button>

                <Button variant='rewardCollection' fullWidth>Redemption Instructions</Button>
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

        <SwipeableDrawer
          variant="temporary"
          ModalProps={{
            keepMounted: false,
          }}
          anchor={'bottom'}
          open={mgm}
          onClose={() => { setMgm(false) }}
          onOpen={() => { setMgm(true) }}
        >

          <Panel header="MGM International Award" onClose={() => { setMgm(false) }} variant="limit">
            <Label variant="default" top={26}>
              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e

              We are temporarily adjusting our rewards terms and coditions in favor of our players ability to plan their travel in advance up until the end of the year; 2020. These changes are as follows: This reward may be purchased immediately and will be valid for future use. The redemption duration for this reward is 160 days or Sept 15th; whichever comes first. Players are encouraged to keep the rewards in their wallet in order to plan their future trips once travel restrictions are repealed. All rewards and offers are subject to change without notice as we decipher the best way to support our players future redemption plans and partners resources and availability.Purcahse rewards are refundable prior to redemption for the Loyalty Point cost up to 90 days after the date of purchase or through the last date of availability/e
            </Label>

          </Panel>


        </SwipeableDrawer>

        <SwipeableDrawer
          variant="temporary"
          anchor={'bottom'}
          open={available}
          onClose={() => { setAvailable(false) }}
          onOpen={() => { setAvailable(true) }}
        >

          <Panel header="Availability" onClose={() => { setAvailable(false) }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                value={caledarValue}
                onChange={(newValue) => {
                  console.log(newValue);
                }}
                displayStaticWrapperAs="desktop"
                renderInput={(params) => <TextField {...params} fullWidth sx={{ gridColumn: "span 4" }} />}
              />
            </LocalizationProvider>
          </Panel>


        </SwipeableDrawer>


        <Modal
          open={purchase}
          onClose={() => { setPurchase(false) }}>
          <Box>
            <PurchaseFlow onClose={() => { setPurchase(false) }}></PurchaseFlow>
          </Box>

        </Modal>
      </>
    </>
  );
}
