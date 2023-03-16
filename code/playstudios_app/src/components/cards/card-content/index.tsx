import { Avatar, CardContent, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PriceTag from 'src/components/price-tag';
import BoxTitle, { BoxSubtitle } from '../box-title';
import CardProps from '../props';
import { CardVariant, cardVariant } from '../variants';



export function PlayCardContent({ variant, title, description, image, descriptionImage, price, ribbon, award, awardText, awardIcon }: CardProps) {
    //define useTheme selectcard call event parent typescript
    const theme = useTheme();
    return (
        <CardContent style={cardVariant(theme, variant).content}>
            {variant === CardVariant.partner && <LazyLoadImage src={descriptionImage} style={{ margin: '0 auto', height: 27 }} />}
            {variant !== CardVariant.partner &&
                <>
                    <BoxTitle variant={variant}>{title}</BoxTitle>
                    {variant !== CardVariant.collection && variant !== CardVariant.price &&
                        <BoxSubtitle variant={variant}>{description}</BoxSubtitle>
                    }
                </>
            }
            {variant === CardVariant.reward && price &&
                <PriceTag variant={variant} value={price} />
            }

            {award &&
                <>
                    <Grid container spacing="6">
                        <Grid item xs={12} ></Grid>
                        <Grid item display="flex" >
                            <Avatar src={awardIcon} sx={{ width: 12, height: 12 }} />
                            <Typography variant="H5_R" component="div" sx={{ marginLeft: '6px' }}>{awardText}</Typography>
                        </Grid>
                    </Grid>
                </>
            }
        </CardContent>
    );
}