import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "gk8cnidq",
  dataset: "production",
  apiVersion: "v2025-04-19",
  useCdn: false,
});
