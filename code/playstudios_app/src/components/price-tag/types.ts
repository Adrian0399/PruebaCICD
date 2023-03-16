//emun variant typescript
export enum PriceTagVariant {
  loyaltyPoints = "loyaltyPoints",
  featured = "featured",
  reward = "reward",
  detail = "detail",
}

//define type of variant
export type PriceTagVariantType = keyof typeof PriceTagVariant;
