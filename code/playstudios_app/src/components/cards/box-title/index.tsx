import { Typography } from "@mui/material";
import { CardVariant, CardVariantType } from "../variants";

//Create component BoxTitle add children and variant props
export default function BoxTitle({ variant, children }: { variant?: CardVariantType | string, children: React.ReactNode }) {
    return (
        <Typography variant={getTitleTypographyVariant(variant)} component="div">
            {children}
        </Typography>
    );
}

export function BoxSubtitle({ variant, children }: { variant?: CardVariantType | string, children: React.ReactNode }) {
    return (
        <Typography variant={getSubTitleTypographyVariant(variant)} component="div" color="text.secondary">
            {children}
        </Typography>
    );
}

//function get typography variant for card type switch
export function getTitleTypographyVariant(variant: CardVariantType | string | undefined) {
    switch (variant) {
        case CardVariant.featured:
            return 'H2_R';
        case CardVariant.partner:
            return 'H2_R';
        case CardVariant.category:
            return 'H3_SB';
        case CardVariant.destination:
            return 'H3_SB';
        case CardVariant.collection:
            return 'H3_SB';
        case CardVariant.price:
            return 'H3_SB';
        case CardVariant.reward:
            return 'H4_B';
        case CardVariant.available:
            return 'H4_B';
        case CardVariant.availableSon:
            return 'H4_B';
        case CardVariant.tier:
            return 'H4_B';
        case CardVariant.history:
            return 'H3_M';
        default:
            return 'H2_R';
    }
}

//function get typography variant for card type switch
export function getSubTitleTypographyVariant(variant: CardVariantType | string | undefined) {
    switch (variant) {
        case CardVariant.featured:
            return 'H4_R';
        case CardVariant.partner:
            return 'H4_R';
        case CardVariant.category:
            return 'H4_R';
        case CardVariant.destination:
            return 'H5_R';
        case CardVariant.collection:
            return 'H5_R';
        case CardVariant.price:
            return 'H5_R';
        case CardVariant.reward:
            return 'H4_R';
        case CardVariant.available:
            return 'H5_R';
        case CardVariant.availableSon:
            return 'H5_R';
        case CardVariant.tier:
            return 'H5_R';
        case CardVariant.history:
            return 'H4_R';
        default:
            return 'H5_R';
    }
}