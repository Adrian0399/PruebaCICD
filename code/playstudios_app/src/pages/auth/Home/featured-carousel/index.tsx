//import useCallback
import { useCallback } from 'react';

//import navigation react router dom
import { useNavigate } from 'react-router-dom';

//import redux
import { useDispatch, useSelector } from 'react-redux';
import { Featured, selectFeatured } from 'slices/featuredSlice';
import PlayCard from 'src/components/cards';
import Label from 'src/components/label';
import Section from 'src/components/section';
import { PATH_AUTH } from 'src/router/paths';
import { RootState } from 'src/store';

import PlayCarousel from 'src/components/carousel/play-carousel';


//add props to FeaturedCarousel home
export default function FeaturedCarousel({ home }: { home?: boolean | false }) {
  const dispatch = useDispatch();
  const { featured } = useSelector((state: RootState) => state);

  //navigate react router dom
  const navigate = useNavigate();


  //useCallback selectCardFeature
  const selectCard = useCallback((featured: Featured) => {
    if (featured?.id) {
      dispatch(selectFeatured(featured?.id) as any);

      setTimeout(() => {
        navigate(PATH_AUTH.detailFeature);
      }, 500);
    }
  }, []);

  const buildCards = useCallback(() => {
    return featured?.featureds?.map((featured: Featured) => (
      <PlayCard
        key={featured.id}
        variant={'featured'}
        title={featured.name}
        description={featured.description}
        image={featured.image}
        ribbon={featured.ribbon}
        price={featured.coins}

        onClick={() => { selectCard(featured) }}
      />
    ))
  }, [featured]);

  return (
    <>
      {featured?.featureds &&
        <>
          <Section>
            <Label variant="H2_SBP" bottom={4} top={11}>Featureeeeed</Label>
          </Section>
          <PlayCarousel
            elementWidth={219}
            cellSpacing={14}
            startSpacing={18}
            endSpacing={18}
            bottonStart={false}
            elements={buildCards()}
          />
        </>
      }
    </>
  );
}
