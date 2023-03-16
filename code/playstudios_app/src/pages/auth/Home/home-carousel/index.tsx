import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import PlayCard from 'components/cards';
import PlayCarousel from 'components/carousel/play-carousel';
import Label from 'components/label';
import Section from 'components/section';
import { RootState } from 'src/store';
import { Award, Section as SectionPlay } from 'src/store/slices/homeSlice';
import { PATH_AUTH } from 'src/router/paths';
import { useNavigate } from 'react-router-dom';
import { generateUUID } from 'src/utils/general';

// ----------------------------------------------------------------------

export default function HomeCarousel() {
    const { home } = useSelector((state: RootState) => state);

    //navigate react router dom
  const navigate = useNavigate();


  //useCallback selectCardFeature
  const selectCardAward = useCallback((award: Award) => {
    if (award?.OfferID) {
      //dispatch(selectFeatured(featured?.id) as any);

      setTimeout(() => {
        navigate(PATH_AUTH.detailFeature);
      }, 500);
    }
  }, []);

  const selectCardSection = useCallback((section: SectionPlay) => {
    if (section?.ID) {
      //dispatch(selectFeatured(featured?.id) as any);

      setTimeout(() => {
        navigate(PATH_AUTH.detail);
      }, 500);
    }
  }, []);

    //define buildCards useCallback to build cards received lane.Awards
    const buildCards = useCallback((awards: Award[]) => {
        return awards.map((award: Award, index: number) => (
            <PlayCard
                key={award.OfferID}
                variant={ award.Featured ? 'featured' : award.SnipeText }
                title={award.PartnerName}
                description={award.Title}
                image={award.ImageURL}
                //ribbon={featured.ribbon}
                price={award.Price}

                onClick={() => { selectCardAward(award) }}
            />
        ))
    }, [home]);

    const buildCardsSection = useCallback((sections: SectionPlay[]) => {
        return sections.map((section: SectionPlay, index: number) => (
            <PlayCard
                key={section.ID}
                variant={ section.Type  }
                title={section.Title}
                description={section.SubTitle}
                image={section.CellImageURL}
                descriptionImage={section.LogoImageURL}
                //ribbon={featured.ribbon}
                //price={section.Price}

                onClick={() => { selectCardSection(section) }}
            />
        ))
    }, [home]);

    return (
        <>
            {home.Lanes && home.Lanes.map((lane, index) => {
                return (
                    <>
                        {(lane.Meta && ((lane.Awards && lane.Awards.length > 0) || lane.Sections && lane.Sections.length > 0 ) ) &&
                            <Section key={lane.Meta._id}>
                                <Label variant="H2_SBP" bottom={4} top={11}>{lane.Meta.Title}</Label>
                            </Section>
                        }

                        {(lane.Awards && lane.Awards.length > 0 ) &&
                            <PlayCarousel key={generateUUID()}
                                elementWidth={219}
                                cellSpacing={14}
                                startSpacing={18}
                                endSpacing={18}
                                bottonStart={false}
                                elements={buildCards(lane.Awards)}
                            />
                        }

                        {(lane.Sections && lane.Sections.length > 0 ) &&
                            <PlayCarousel key={generateUUID()}
                                elementWidth={108}
                                cellSpacing={12}
                                startSpacing={18}
                                bottonStart
                                elements={buildCardsSection(lane.Sections)}
                            />
                        }

                    </>
                )
            })}
        </>
    );
}
