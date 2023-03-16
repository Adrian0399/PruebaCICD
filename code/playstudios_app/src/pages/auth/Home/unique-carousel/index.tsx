//import useCallback
import { useCallback } from 'react';

// sections immports
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Unique } from 'slices/uniquesSlice';
import PlayCard from 'src/components/cards';
import { PATH_AUTH } from 'src/router/paths';
import { RootState } from 'src/store';

//Import arrow icon
import PlayCarousel from 'src/components/carousel/play-carousel';
import Label from 'src/components/label';
import Section from 'src/components/section';

// ----------------------------------------------------------------------


//Create component UniqueCarousel with state Uniques return carousel with UniqueCard
export default function UniqueCarousel() {
  const { uniques } = useSelector((state: RootState) => state);
  //navigate react router dom
  const navigate = useNavigate();

  const selectCard = useCallback((unique: Unique) => {
    setTimeout(() => {
      navigate(PATH_AUTH.detail);
    }, 500);
  }, []);


  //Typescript function buildCards return array of PlayCard
  const buildCards = useCallback(() => {
    return uniques?.uniques?.map((unique: Unique) => (
      <PlayCard
        key={unique.id}
        variant="collection"
        title={unique.name}
        description={unique.description}
        image={unique.image}
        onClick={() => selectCard(unique)}
      />
    ));
  }, [uniques]);

  return (
    <>
      {uniques?.uniques &&
        <>
          <Divider variant="fullWidth" style={{ marginTop: 24, marginLeft: 18 }} />
          <Section>
            <Label variant="H2_SBP" bottom={4} top={19}>Unique Collections</Label>
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
