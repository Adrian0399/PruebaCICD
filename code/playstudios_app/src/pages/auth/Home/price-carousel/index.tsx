import { useCallback } from 'react';

// sections immports
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Price } from 'slices/pricesSlice';
import PlayCard from 'src/components/cards';
import { PATH_AUTH } from 'src/router/paths';
import { RootState } from 'src/store';

//Import arrow icon
import PlayCarousel from 'src/components/carousel/play-carousel';
import Label from 'src/components/label';
import Section from 'src/components/section';

// ----------------------------------------------------------------------

//Create component PriceCarousel with state Prices return carousel with PriceCard
export default function PriceCarousel() {
  const { prices } = useSelector((state: RootState) => state);

  //navigate react router dom
  const navigate = useNavigate();

  const selectCard = useCallback((price: Price) => {
    setTimeout(() => {
      navigate(PATH_AUTH.detail);
    }, 500);
  }, []);

  //Typescript function buildCards return array of PlayCard
  const buildCards = useCallback(() => {
    return prices?.prices?.map((price: Price) => (
      <PlayCard
        key={price.id}
        variant="price"
        title={price.name}
        description={price.description}
        image={price.image}

        onClick={() => selectCard(price)}
      />
    ));
  }, [prices]);

  return (
    <>
      {prices?.prices &&
        <>
          <Divider variant="fullWidth" style={{ marginTop: 24, marginLeft: 18 }} />
          <Section>
            <Label variant="H2_SBP" bottom={4} top={19}>Price</Label>
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

