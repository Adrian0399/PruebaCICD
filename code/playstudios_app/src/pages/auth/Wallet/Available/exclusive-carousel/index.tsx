import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Partner } from 'slices/partnersSlice';
import PlayCard from 'src/components/cards';
import PlayCarousel from 'src/components/carousel/play-carousel';
import { PATH_AUTH } from 'src/router/paths';
import { RootState } from 'src/store';

// ----------------------------------------------------------------------

export default function ExclusiveCarousel() {
  const { partners } = useSelector((state: RootState) => state);

  //navigate react router dom
  const navigate = useNavigate();

  //useCallback selectCard
  const selectCard = useCallback((parner: Partner) => {
    setTimeout(() => {
      navigate(PATH_AUTH.detailWallet);
    }, 500);
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
