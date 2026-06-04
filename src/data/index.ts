import { CountryConfig } from "@/types/country";
import { usConfig } from "./us";
import { caConfig } from "./ca";
import { ukConfig } from "./uk";
import { auConfig } from "./au";
import { nzConfig } from "./nz";
import { deConfig } from "./de";
import { frConfig } from "./fr";
import { nlConfig } from "./nl";
import { ieConfig } from "./ie";
import { jpConfig } from "./jp";
import { krConfig } from "./kr";
import { sgConfig } from "./sg";
import { hkConfig } from "./hk";
import { seConfig } from "./se";
import { noConfig } from "./no";
import { dkConfig } from "./dk";
import { fiConfig } from "./fi";
import { cnConfig } from "./cn";

export const COUNTRIES: CountryConfig[] = [
  usConfig,
  caConfig,
  ukConfig,
  auConfig,
  nzConfig,
  deConfig,
  frConfig,
  nlConfig,
  ieConfig,
  jpConfig,
  krConfig,
  sgConfig,
  hkConfig,
  seConfig,
  noConfig,
  dkConfig,
  fiConfig,
  cnConfig,
];

export function getCountryById(id: string): CountryConfig {
  const country = COUNTRIES.find((c) => c.id === id);
  if (!country) throw new Error(`Country not found: ${id}`);
  return country;
}

export function getDefaultCountry(): CountryConfig {
  return usConfig;
}
