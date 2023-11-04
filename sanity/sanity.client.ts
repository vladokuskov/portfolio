import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "1bvfxolc",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: true,
};

const client = createClient(config);

export default client;
