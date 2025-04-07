import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
    projectId: "gk8cnidq",
    dataset: "production",
    apiVersion: "v2025-03-24",
    useCdn: false,
});