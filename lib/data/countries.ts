// ISO 3166-1 alpha-2 codes. Names are resolved via Intl.DisplayNames so we
// don't hand-maintain 190+ country names (and they stay correctly localized
// if we ever pass a different locale in).
const COUNTRY_CODES = [
  "AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AU", "AT",
  "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BT",
  "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "CV", "KH",
  "CM", "CA", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CD",
  "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO",
  "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FJ", "FI",
  "FR", "GA", "GM", "GE", "DE", "GH", "GR", "GD", "GT", "GN",
  "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR",
  "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI",
  "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY",
  "LI", "LT", "LU", "MG", "MW", "MY", "MV", "ML", "MT", "MH",
  "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MA", "MZ",
  "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG", "MK",
  "NO", "OM", "PK", "PW", "PA", "PG", "PY", "PE", "PH", "PL",
  "PT", "QA", "RO", "RU", "RW", "KN", "LC", "VC", "WS", "SM",
  "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB",
  "SO", "ZA", "SS", "ES", "LK", "SD", "SR", "SE", "CH", "SY",
  "TW", "TJ", "TZ", "TH", "TL", "TG", "TO", "TT", "TN", "TR",
  "TM", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU",
  "VA", "VE", "VN", "YE", "ZM", "ZW",
] as const;

export type CountryCode = (typeof COUNTRY_CODES)[number];

function buildCountryOptions() {
  const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

  return COUNTRY_CODES.map((code) => ({
    value: code,
    label: displayNames.of(code) ?? code,
  })).sort((a, b) => a.label.localeCompare(b.label));
}

export const COUNTRY_OPTIONS = buildCountryOptions();
export const COUNTRY_VALUES = COUNTRY_OPTIONS.map((c) => c.value) as [CountryCode, ...CountryCode[]];
