
import { useTheme } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import available from "assets/available.svg";
import availableSon from "assets/availableSoon.svg";
import tier from "assets/tierLocked.svg";
import CardProps from "../props";
import { CardVariant, cardVariant } from '../variants';

export default function PlayCardMedia({ variant, title, description, image, price, ribbon }: CardProps) {

    const theme = useTheme();

    if (variant === CardVariant.available) {
        //replace img to available
        image = available;
    }
    if (variant === CardVariant.availableSon) {
        //replace img to available
        image = availableSon;
    }
    if (variant === CardVariant.tier) {
        //replace img to available
        image = tier;
    }

    return (
        <CardMedia
            style={cardVariant(theme, variant).media}
            component="img"
            loading='lazy'
            image={image}
            alt={title}
        />
    );
}