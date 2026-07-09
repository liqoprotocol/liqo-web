export const COMPANY_SIZE_OPTIONS = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-1000", label: "201–1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
] as const;

export type CompanySizeValue = (typeof COMPANY_SIZE_OPTIONS)[number]["value"];
export const COMPANY_SIZE_VALUES = COMPANY_SIZE_OPTIONS.map((c) => c.value) as [
  CompanySizeValue,
  ...CompanySizeValue[],
];
