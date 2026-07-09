export const ROLE_OPTIONS = [
  { value: "developer", label: "Developer" },
  { value: "founder", label: "Founder" },
  { value: "product-manager", label: "Product Manager" },
  { value: "engineer", label: "Engineer" },
  { value: "fintech", label: "Fintech" },
  { value: "enterprise", label: "Enterprise" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Other" },
] as const;

export type RoleValue = (typeof ROLE_OPTIONS)[number]["value"];
export const ROLE_VALUES = ROLE_OPTIONS.map((r) => r.value) as [RoleValue, ...RoleValue[]];
