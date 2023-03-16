import { v4 as uuid } from "uuid";

//Typescript function to generate uuid v4
export function generateUUID(): string {
  return uuid();
}

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));