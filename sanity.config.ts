import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: "Dr. Khushboo's Dent House",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6d5h3oaf',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  basePath: '/studio',
  schema: {
    types: schemaTypes,
  },
})
