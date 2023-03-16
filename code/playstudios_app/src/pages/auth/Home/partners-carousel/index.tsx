import { Divider } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Partner, selectPartner } from 'slices/partnersSlice';
import PlayCard from 'src/components/cards';
import { PATH_AUTH } from 'src/router/paths';
import { RootState } from 'src/store';

//Import arrow icon
import PlayCarousel from 'src/components/carousel/play-carousel';
import Label from 'src/components/label';
import Section from 'src/components/section';

// ----------------------------------------------------------------------

export default function PartnersCarousel() {

  const dispatch = useDispatch();
  const { partners } = useSelector((state: RootState) => state);

  //navigate react router dom
  const navigate = useNavigate();

  //useCallback selectCard
  const selectCard = useCallback((parner: Partner) => {
    if (parner?.id) {
      dispatch(selectPartner(parner?.id) as any);
      setTimeout(() => {
        navigate(PATH_AUTH.detail);
      }, 500);
    }
  }, []);

  //Typescript function buildCardsFeatures return array of PlayCard
  const buildCards = useCallback(() => {
    return partners?.partners?.map((partner: Partner) => (
      <PlayCard
        key={partner.id}
        variant={partner.variant}
        title={partner.name}
        description={partner.description}
        descriptionImage={partner.imageDesc}
        image={partner.image}
        price={partner.coins}
        onClick={() => selectCard(partner)}
      />
    ));
  }, [partners]);

  return (
    <>
      {partners?.partners &&
        <>
          <Divider variant="fullWidth" style={{ marginTop: 24, marginLeft: 18 }} />
          <Section>
            <Label variant="H2_SBP" bottom={4} top={19}>Partners</Label>
          </Section>
          <PlayCarousel
            elementWidth={108}
            cellSpacing={12}
            startSpacing={18}
            bottonStart
            elements={buildCards()}
          />
        </>
      }
    </>
  );
}
