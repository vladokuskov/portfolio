import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: true,
};

const client = createClient(config);

export default client;
