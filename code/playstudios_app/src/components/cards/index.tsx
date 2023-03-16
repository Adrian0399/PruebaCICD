//Create react mui Card component with TWO varianters styles

import { Card, CardActionArea, useTheme } from '@mui/material';
import BoxCard from 'components/cards/box-card';
import PriceTag from 'components/price-tag';

import { CardVariant, cardVariant } from './variants';

//import utils
import Ribbon from 'components/ribbon';
import { useCallback } from 'react';
import { PlayCardContent } from './card-content';
import PlayCardMedia from './card-media';
import CardProps from './props';


//add event on click
export default function PlayCard({ variant, title, description, image, price, ribbon, descriptionImage, award, awardText, awardIcon, onClick }: CardProps) {

    //define useTheme selectcard call event parent typescript
    const theme = useTheme();

    //define useCallback selectcard call event parent typescript
    const selectcard = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <BoxCard onClick={selectcard}>
            <Card style={cardVariant(theme, variant).root}>
                <CardActionArea style={{ position: 'relative', height: 'inherit' }} sx={variant === CardVariant.history ? { display: 'flex' } : {}}>
                    {(variant === CardVariant.partner || variant === CardVariant.history) &&
                        <PlayCardMedia variant={variant} title={title} description={description} image={image} price={price} ribbon={ribbon} />
                    }
                    <PlayCardContent
                        variant={variant}
                        title={title}
                        description={description}
                        image={image}
                        price={price}
                        ribbon={ribbon}
                        descriptionImage={descriptionImage}
                        award={award}
                        awardText={awardText}
                        awardIcon={awardIcon} />
                    {(variant !== CardVariant.partner && variant !== CardVariant.history) &&
                        <PlayCardMedia variant={variant} title={title} description={description} image={image} price={price} ribbon={ribbon} />
                    }
                </CardActionArea>
                {price && <PriceTag variant={variant} value={price} />}

            </Card>
            {(ribbon && ribbon != '') &&
                <Ribbon>{ribbon}</Ribbon>
            }
        </BoxCard>
    );
}