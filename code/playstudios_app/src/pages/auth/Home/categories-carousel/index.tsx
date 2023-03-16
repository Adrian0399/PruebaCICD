import { useCallback } from 'react';

//import redux
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Category } from 'slices/categoriesSlice';
import PlayCard from 'src/components/cards';
import { PATH_AUTH } from 'src/router/paths';
import { RootState } from 'src/store';
import PlayCarousel from '../../../../components/carousel/play-carousel';

//Import arrow icon
import Label from 'src/components/label';
import Section from 'src/components/section';

// ----------------------------------------------------------------------

//Create component CategoriesCarousel with state Categories return carousel with categoriesCard
export default function CategoriesCarousel({ home }: { home?: boolean | false }) {
  const { categories } = useSelector((state: RootState) => state);

  //navigate react router dom
  const navigate = useNavigate();

  const selectCard = useCallback((parner: Category) => {
    setTimeout(() => {
      navigate(PATH_AUTH.detail);
    }, 500);
  }, []);

  //Typescript function buildCardsFeatures return array of PlayCard
  const buildCards = useCallback(() => {
    return categories?.categories?.map((category: Category) => (
      <PlayCard
        key={category.id}
        variant="category"
        title={category.name}
        description={category.description}
        image={category.image}
        onClick={() => selectCard(category)}
      />
    ));

  }, [categories]);

  return (
    <>
      {categories?.categories &&
        <>
          <Divider variant="fullWidth" style={{ marginTop: 24, marginLeft: 18 }} />
          <Section>
            <Label variant="H2_SBP" bottom={4} top={19}>Categories</Label>
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
