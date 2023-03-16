import { Theme } from "@mui/material/styles";
import texture1 from "assets/texture1.svg";

//Emun vartiants
export enum CardVariant {
  featured = "featured",
  partner = "partner",
  category = "category",
  destination = "destination",
  purchase = "purchase",
  collection = "collection",
  price = "price",
  reward = "reward",
  available = "available",
  availableSon = "availableSon",
  tier = "tier",
  history = "history",
}

//define type of variant card
export type CardVariantType = keyof typeof CardVariant;

//Generate cards variants, variant cal undefined
export const cardVariant = (
  theme: Theme,
  variant: string = CardVariant.category
) => {
  switch (variant) {
    case CardVariant.history:
      return {
        root: {
          minWidth: 90 + "vw",
          display: 'flex',
          boxShadow: "none",
          margin: 0,
          position: "relative",
        } as any,
        media: {
          height: 106,
          width: 88,
          borderRadius: 3
        } as any,
        content: {
          padding: '0px 0px 0px 18px',
          boxShadow: "none",
          top: 0,
          zIndex: 2,
          width: 100 + "%",
          gap: 4,
          display: 'grid'

        } as any,
      };
    case CardVariant.featured:
      return {
        root: {
          minWidth: 219,
          with: 219,
          height: 176,
          position: "relative",
        } as any,
        media: {
          height: 122.66,
          position: "absolute",
          bottom: 0,
        } as any,
        content: {
          padding: 8,
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
        } as any,
      };
    case CardVariant.partner:
      return {
        root: {
          minWidth: 110,
          maxWidth: 120,
          height: 160,
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          padding: 8,
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          height: 53,
          display: "flex",
          alignItems: "center",
        } as any,
      };
    case CardVariant.category:
      return {
        root: {
          minWidth: 110,
          height: 160,
          maxWidth: 120,
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          minHeight: 53,

          borderRadius: "0px 0px 6px 6px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "12px 8px",
        } as any,
      };
    case CardVariant.destination:
      return {
        root: {
          minWidth: 110,
          height: 160,
          maxWidth: 120,
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          padding: 8,
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          minHeight: 53,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        } as any,
      };
    case CardVariant.purchase:
      return {
        root: {
          minWidth: 160,
          maxWidth: 120,
          height: 160,
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          padding: 8,
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          minHeight: 53,
          textAlign: "center",
        } as any,
      };
    case CardVariant.collection:
      return {
        root: {
          minWidth: 110,
          maxWidth: 120,
          height: 160,
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          minHeight: 53,
          textAlign: "center",
          display: "grid",
          flexDirection: "column",
          alignItems: "center",
          padding: "11px 8px",
        } as any,
      };
    case CardVariant.price:
      return {
        root: {
          minWidth: 110,
          maxWidth: 120,
          height: 160,
          backgroundImage: `url(${texture1})`,
          backgroundSize: "cover",
          backgroundPosition: "-2px 0px",
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          width: 100 + "%",
          minHeight: 38.79,
          background:
            "linear-gradient(90deg, rgba(209,209,235,1) 0%, rgba(133,134,196,1) 77%, rgba(137,138,202,1) 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px 8px",
        } as any,
      };
    case CardVariant.reward:
      return {
        root: {
          minWidth: 110,
          maxWidth: 120,
          height: 160,
          position: "relative",
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          padding: 8,
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          minHeight: 53,

          display: "flex",
          flexDirection: "column",
          gap: 2,
        } as any,
      };
    case CardVariant.available:
      return availableCard;
    case CardVariant.availableSon:
      return availableCard;
    case CardVariant.tier:
      return {
        root: {
          minWidth: 110,
          maxWidth: 120,
          height: 160,
          backgroundColor: "#F6F6FB",
        } as any,
        media: {
          height: 43,
          width: 38,
          objectFit: "contain",
          position: "absolute",
          top: 27,
          left: 36.32,
        } as any,
        content: {
          padding: "8px 8px 15px 8px",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          width: 100 + "%",
          minHeight: 53,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        } as any,
      };
    default:
      return {
        root: {
          minWidth: 110,
          maxWidth: 120,
          height: 160,
        } as any,
        media: {
          height: 107,
          position: "absolute",
          top: 0,
        } as any,
        content: {
          padding: 8,
          boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          background: "white",
          width: 100 + "%",
          minHeight: 53,
          textAlign: "center",
        } as any,
      };
  }
};

let availableCard = {
  root: {
    minWidth: 110,
    height: 160,
  } as any,
  media: {
    height: 43,
    width: 38,
    objectFit: "contain",
    position: "absolute",
    top: 27,
    left: 36.32,
  } as any,
  content: {
    padding: "8px 8px 15px 8px",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    width: 100 + "%",
    minHeight: 53,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  } as any,
};