import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "0lqo36oc",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2026-02-21",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas }
})

export default config